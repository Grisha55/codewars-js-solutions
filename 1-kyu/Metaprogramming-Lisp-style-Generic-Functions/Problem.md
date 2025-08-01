# Generic Functions
Disclaimer: I have tried to specify the expected behaviors completely here and provide external references where appropriate. It is almost certain that I have left things vague in some instances. It is not my intention. Even if you fully understand everything that I want out of this kata, it will be plenty challenging. Understanding what I want you to do is not supposed to be part of the challenge. So, if I have come up short in conveying what should be done, please ask in the discussion.

In Javascript, functions are single-dispatch. "Single-dispatch" means that the actual code that gets called depends only on the (proto)type of one parameter (the this parameter). In many other languages, the code that gets executed when you invoke a function depends on the types of all of the arguments used to call the function, not just the class in which the function is defined. For example, in Java you could have multiple myPrint methods in a class each with a different type for the argument:
```
public class MyPrintRoutines {
    public static void myPrint(String str) { ... };
    public static void myPrint(double dbl) { ... };
};
```
In Common Lisp, this type of overloading is done with Generic Functions. One declares a generic function and then adds methods to it for particular types of arguments.
```
(defgeneric my-print (item))
(defmethod my-print ((str string)) ...)
(defmethod my-print ((dbl real)) ...)
```
C++ does something similar with function overloading. Haskell and Scala use a variation called pattern matching. The typical way to do something like this in Javascript is to add methods to multiple class prototypes:
```
String.prototype.myPrint = function () { ... };
Number.prototype.myPrint = function () { ... };
```
Doing this in Javascript falls short if you want to dispatch on more than just the this prototype. For example, suppose that I want to create a function append that when called with two Array instances, concatenates them. When called with an Array instance and something else, puts the something onto the appropriate end of the Array instance. You could do that as follows:
```
function append(a,b) {
  if (a instanceof Array && b instanceof Array) {
    return a.concat(b);
  } else if (a instanceof Array) {
    return a.concat([b]);
  } else if (b instanceof Array) {
    return [a].concat(b);
  } else {
    throw "Error!  Either a or b must be an array!";
  }
};
```
In doing so, you have to define every use-case for append() all in one place. You also end up mushing together all of the type-checking code with all of the operational code. Once you complete this kata, you will be able to do the following:
```
var append = defgeneric('append');
append.defmethod('Array,Array', function (a,b) { return a.concat(b); });
append.defmethod('*,Array', function (a,b) { return [a].concat(b); });
append.defmethod('Array,*', function (a,b) { return a.concat([b]); });

append([1,2],[3,4]); // => [1,2,3,4]
append(1,[2,3,4]);   // => [1,2,3,4]
append([1,2,3],4);   // => [1,2,3,4]
append(1,2,3,4);     // => throws "No method found for append with args: number,number,number,number
```
## Defgeneric
The argument to defgeneric specifies the name that will be used when generating exceptions. The return value from defgeneric is a function that one can invoke with arguments. The types of those arguments will be matched against the types specified for the various methods on the generic function.

## Defmethod
The first argument to defmethod is a comma-separated list of types called the method discriminator. The second argument is the function to invoke when the arguments to the function call match the list of types. Valid types are: *, undefined, null, boolean, number, string, object, function, or any class name.

defmethod takes an optional third argument called the combination. The default combination should be 'primary'. Other acceptable options for the combination argument are: 'around', 'before', and 'after'. These will be explained below in the "Method combination" section.

If a method already exists for the generic function with the same discriminators and combination, it should be replaced.

The defmethod function returns the generic function to which the new method was added.

Matching method types
Let's assume that these classes are defined in the global scope:
```
function Mammal() {}

function Rhino() {}
Rhino.prototype = new Mammal();
Rhino.prototype.constructor = Rhino;

function Platypus() {}
Platypus.prototype = new Mammal();
Platypus.prototype.constructor = Platypus;
An argument a matches a type t if:

1)  a instanceof Object and a.constructor.name === t
2)  a instanceof Object and a.__proto__ satisfies rule #1 or rule #2
3)  a === null and t === 'null'
4)  typeof a === t
5)  t === '*'
```
It is possible for an argument to match more than one type. With our Platypus class above, an argument new Platypus() would match *, object, Object, Mammal, and Platypus. The list of matching rules above is shown in order from most-specific match to least-specific match. So, for example, matching a = new Platypus() with Platypus is more specific than matching it with Mammal because a.constructor.name === 'Platypus' comes before a.__proto__ satisfies rule #1 or rule #2 in the list of matching rules.

The argument a = new Platypus() would match all of these discriminators: *, object, Object, Mammal, Platypus. So, if the discriminator were Platypus, then we'd match on #1 because a.constructor.name === 'Platypus'. If the discriminator type were Object, then we'd fail #1 a.constructor.name !== 'Object' so we'd get to #2 and check a.__proto__ against rule #1 and rule #2. We'd see that a.__proto__.constructor.name === 'Mammal' !== 'Object' so we fail rule #1 with a.__proto__ and move on to rule #2 with a.__proto__ which tells us to check a.__proto__.__proto__. We see that a.__proto__.__proto__.constructor.name === 'Object' and so we're done.

Note: In Javascript, we eventually get to a point where the object we're looking at has itself as its .__proto__. At that point, it is futile to continue looping hoping it will eventually match.

Getting the type matching precedences correct is the second trickiest part of this kata.

If no methods match the arguments, it should throw a string, with the format "No method found for NAME with args: ARGS" where NAME is the name of the generic and ARGS is a comma-deliminated list of the argument types.

When multiple methods match the arguments, the generic should call the most-specific method. So, the following must happen:

var laysEggs = defgeneric('laysEggs')
  .defmethod('Mammal', function () { return false; })
  .defmethod('Platypus', function () { return true; }); 

laysEggs(new Rhino());     // => false
laysEggs(new Platypus());  // => true
laysEggs(5)                // throws "No method found for laysEggs with args: number"
Note: our defgeneric and defmethod both return the generic function to allow method chaining.

When there are multiple arguments to a function, the specificness is determined from left to right. For example, if there are two discriminators: t1,t2,t3 and s1,s2,s3, then the first discriminator is less specific than the second if:

t1 is less specific than s1, or
t1 is the same as s1 and t2 is less specific than s2, or
t1 is the same as s1 and t2 is the same as s2 and t3 is less specific than s3
For example:

Mammal,Rhino is less specific than Rhino, Mammal
Mammal,Mammal is less specific than Mammal,Mammal
Mammal,* is less specific than Mammal,Mammal
Method combination
The (optional) combination argument to defmethod can be: 'primary' (the default), 'before', 'after', or 'around'. This specifies the way the method defined in this call should be combined with other applicable methods.

Method combination is the trickiest part of this kata.

In the laysEggs() example above, both methods were defined with the combination defaulting to 'primary'. When the generic function is invoked on a given argument, the generic function must return the value returned by the most specific 'primary' method for the argument (assuming there are no applicable 'around' combination methods (more on 'around' methods later)). Our laysEggs() has two methods defined: one for 'Mammal' and one for 'Platypus'. In the call laysEggs(new Platypus()), both of those methods are applicable because the new Platypus() matches both the discriminator 'Platypus' and the discriminator 'Mammal' . However, the 'Platypus' method is more specific. The call laysEggs(new Platypus()) must return the value from the most specific of the applicable 'primary' methods: the 'Platypus' method.

If there are any applicable methods defined with the 'before' combination, they must all be invoked before the 'primary' method. The 'before' methods must be invoked in order from most-specific to least-specific. If there are any applicable methods defined with the 'after' combination, they must all be invoked after the 'primary' method. The 'after' methods must be invoked in order from least-specific to most-specific. Even if there are 'before' and 'after' methods the return value must still be the return value of the most specific 'primary' method.

So, here we add some 'before' and 'after' methods to the laysEggs() generic function:
```
laysEggs
  .defmethod('Platypus', function () { console.log('Before platypus egg check.'); }, 'before')
  .defmethod('Mammal', function () { console.log('Before mammal egg check.'); }, 'before')
  .defmethod('*', function () { console.log('Before egg check.'); }, 'before')
  .defmethod('Platypus', function () { console.log ('After platypus egg check.'); }, 'after')
  .defmethod('Mammal', function () { console.log('After mammal egg check.'); }, 'after');
```
Now, if one invokes laysEggs(new Platypus()) the return value will be true as it was before and these messages will be printed on the console (in this order):

Before platypus egg check.
Before mammal egg check.
Before egg check.
After mammal egg check.
After platypus egg check.
The 'primary' method for the Platypus will be invoked between the Before egg check. message and the After mammal egg check. message.

Now, for the really tricky parts of method combination... The body of a 'primary' method can invoke the function callNextMethod(this, arg1, arg2, ...) to invoke the next-most-specific 'primary' method. So, for example, we can define a describe() generic method like this:

var describe = defgeneric('describe')
  .defmethod('Mammal', function () { return "Warm-blooded animal with large four-chambered heart."; })
  .defmethod('Platypus', function (p) { return callNextMethod(this,p) + " [Aquatic]"; });
Now, when invoked as describe(new Platypus()), the method should return the string: "Warm-blooded animal with large four-chambered heart.  [Aquatic]".

If there are 'around' combination methods defined, the generic function should invoke (and return the return-value from) the most-specific 'around' method. If the 'around' method calls callNextMethod(this, arg1, arg2, ...), that should invoke the next-most-specific 'around' method or, if there are no more 'around' methods, it should invoke all of the 'before', 'primary', and 'after' methods as if there were no 'around' methods.

To describe this more completely, let's add two around methods to the laysEggs() method above.

laysEggs.defmethod('Platypus', function (p) {
    console.log('>>>Around platypus check.');
    var ret = callNextMethod(this,p);
    console.log('<<<Around platypus check.');
    return ret;
  }, 'around');
laysEggs.defmethod('Mammal', function (p) {
    console.log('>>>Around mammal check.');
    var ret = callNextMethod(this,p);
    console.log('<<<Around mammal check.');
    return ret;
  }, 'around');
Now, invoking laysEggs(new Platypus()) will return the value of the 'around' method for 'Platypus' which returns the value for the 'around' method for 'Mammal' which invokes all of the 'before' methods, returns the value of the 'primary' method for Platypus, and invokes all of the 'after' methods. So, the resulting output would be:

>>>Around platypus check.
>>>Around mammal check.
Before platypus egg check.
Before mammal egg check.
Before egg check.
After mammal egg check.
After platypus egg check.
<<<Around mammal check.
<<<Around platypus check.
Note: there is no requirement that an 'around' or 'primary' method has to invoke callNextMethod(this, arg1, arg2, ...) or that it use the result if it does invoke callNextMethod.

If callNextMethod(this, arg1, arg2, ...) cannot find a next method, it should throw a string that says "No next method found for NAME in COMBINATION" where NAME is the name of the generic and COMBINATION is either around (if currently in an 'around' method) or primary (if currently in a 'primary' method).

Summary of Method Combination
Here is a quick rundown of the method combination rules described above.

If there are 'around' methods, the generic function invokes the most-specific 'around' method and returns the return value of that. A generic function with an around method does not necessarily need to have any primary methods.

If an 'around' method invokes callNextMethod(this, arg1, arg2, ...) that invokes the next-most-specific 'around' method. If there are no more 'around' methods, it invokes the generic function as if there were no 'around' methods at all.

If there are 'primary' methods but no 'around' method (or we've exhausted all of the 'around' methods with callNextMethod), then the generic function executes all of the 'before' methods from most-specific to least-specific, executes the most-specific 'primary' method, executes all of the 'after' methods from least-specific to most-specific, and returns the value the 'primary' method returned.

If a 'primary' method calls callNextMethod(this, args1, arg2, ...) that executes the next-most-specific 'primary' method (but does not invoke the 'before' and 'after' methods again).

If there are no 'around' or 'primary' methods (or we've exhausted all of the 'around' and 'primary' methods with calNextMethod), the generic function should throw a string as an error.

Removing methods
The generic should support a removeMethod() function. If you call the removeMethod() function on a generic giving it a discriminator and an optional combination, the generic should expunge that method. The default combination is 'primary'. If there is no such method, the removeMethod() function should silently ignore the request.

Finding methods
The generic should support a findMethod() function. If you call the findMethod() on a generic with some arguments, it should return a function one can invoke with arguments of the same type. For example, the following should hold:

var appendLists = append.findMethod([], []);
Test.assertSimilar( appendLists([1,2], [3,4]), append([1,2],[3,4]) );
For efficiency, findMethod() should return the same function each time it is called with the same argument types unless there have been intervening defmethod() or removeMethod() calls on that generic function.

For example, the find1 and find2 should be the same here, but find1 can be different from the find3 and find3 can differ from find4.

var find1 = describe.findMethod(new Platypus());
var find2 = describe.findMethod(new Platypus());
describe.removeMethod('Platypus'};
var find3 = describe.findMethod(new Platypus());
var find4 = describe.findMethod(new Mammal());

Test.assertEquals(find1, find2, "Multiple calls with the same types and no intervening def/remove");
If you find a method with findMethod and then make modifications to the generic function, the method originally returned from findMethod should be unchanged. So, for example:

var name = defgeneric('name')
  .defmethod('Mammal', function () { return 'Mammy'; })
  .defmethod('Platypus', function (p) { return 'Platy ' + callNextMethod(this,p); });

var find1 = name.findMethod(new Platypus());

name.defmethod('Platypus', function () { return 'Pat'; });
name.removeMethod('Mammal');

find1(new Platypus()); // => 'Platy Mammy'
name(new Platypus());  // => 'Pat'
Afterword about Method Combination in Common Lisp
The method combination with primary, before, after, and around is the "standard" method combination in Common Lisp. Common Lisp has a variety of other method combinations built into it. For example, one can use a + method combination to sum the results of all applicable methods. One can use the list combination to return a list of the results of all applicable methods. One can use the max or min combinations to return the maximum or minimum of the results of all applicable methods.

There are a variety of other built-in method combinations. Common Lisp also allows you to define your own method combinations.
