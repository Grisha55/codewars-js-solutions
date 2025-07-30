/**
 * @function i
 * @description Преобразует объект в строку JSON
 * @param {Object} obj - Объект для преобразования
 * @returns {string} Строка JSON
 */

function i(obj) {
  return JSON.stringify(obj);
}

/**
 * @constructor
 * @description Создает интерпретатор математических выражений
 */

function Interpreter() {
  this.functions = {};
  this.variables = {};
}

Interpreter.prototype = {
  /**
   * @function input
   * @description Обрабатывает входное выражение
   * @param {string} expr - Входное выражение
   * @returns {number|string} Результат вычисления или сообщение об ошибке
   */

  input: function(expr) {
    var tokens = this.tokenize(expr);
    var tree   = this.parse(tokens);
    var result = this.interpret(tree);
    return result;
  },

  /**
   * @function interpret
   * @description Интерпретирует синтаксическое дерево
   * @param {Object} tree - Узел синтаксического дерева
   * @returns {number|string} Результат вычисления
   */

  interpret: function(tree) {
    switch(tree.type) {
      case "operator":   return this.interpretOperator(tree);
      case "number":     return this.interpretNumber(tree);
      case "assignment": return this.interpretAssignment(tree);
      case "identifier": return this.interpretIdentifier(tree);
      case "function":   return this.interpretFunction(tree);
      case "fnCall":     return this.interpretFnCall(tree);
      case "container":  return this.interpretContainer(tree);
      case "noop":       return this.interpretNoop(tree);
      default:
        throw "What type is " + JSON.stringify(tree);
    }
  },

  /**
   * @function interpretNumber
   * @description Интерпретирует числовой литерал
   * @param {Object} number - Узел с числовым значением
   * @returns {number} Числовое значение
   */

  interpretNumber: function(number) {
    return parseFloat(number.value);
  },

  /**
   * @function interpretAssignment
   * @description Обрабатывает операцию присваивания
   * @param {Object} assignment - Узел присваивания
   * @returns {number} Присвоенное значение
   */

  interpretAssignment: function(assignment) {
    if(assignment.name in this.functions)
      throw "Variable name collides with function name: " + assignment.name;
    var value = this.interpret(assignment.value);
    this.variables[assignment.name] = value;
    return value;
  },

  /**
   * @function interpretIdentifier
   * @description Получает значение переменной
   * @param {Object} identifier - Узел идентификатора
   * @returns {number} Значение переменной
   */

  interpretIdentifier: function(identifier) {
    if(identifier.value in this.variables)
      return this.variables[identifier.value];
    throw "Missing identifier: " + identifier.value;
  },

  /**
   * @function interpretFunction
   * @description Регистрирует новую функцию
   * @param {Object} fn - Узел определения функции
   * @returns {string} Пустая строка
   */

  interpretFunction: function(fn) {
    if(fn.name in this.variables)
      throw "Function name collides with variable name: " + fn.name;
    this.functions[fn.name] = fn;
    return "";
  },

  /**
   * @function interpretFnCall
   * @description Выполняет вызов функции
   * @param {Object} fnCall - Узел вызова функции
   * @returns {number} Результат выполнения функции
   */

  interpretFnCall: function(fnCall) {
    var that = this;
    var fn   = this.functions[fnCall.name];
    var args = fnCall.args.reduce(function(args, pair) {
      args[pair[0]] = that.interpret(pair[1]);
      return args;
    }, Object.create(this.variables));
    var oldVars = this.variables;
    this.variables = args;
    var result = this.interpret(fn.body);
    this.variables = oldVars;
    return result;
  },

  /**
   * @function interpretOperator
   * @description Выполняет арифметическую операцию
   * @param {Object} tree - Узел операции
   * @returns {number} Результат операции
   */

  interpretOperator: function(tree) {
    var left  = this.interpret(tree.left);
    var right = this.interpret(tree.right);
    switch(tree.operator) {
      case "+": return left + right;
      case "*": return left * right;
      case "-": return left - right;
      case "/": return left / right;
      case "%": return left % right;
      default:
        throw "What operator is in here? " + JSON.stringify(tree);
    }
  },

  /**
   * @function interpretNoop
   * @description Обрабатывает пустую операцию
   * @returns {string} Пустая строка
   */

  interpretNoop: function(noop) {
    return "";
  },

  /**
   * @function interpretContainer
   * @description Обрабатывает выражение в скобках
   * @param {Object} container - Узел контейнера
   * @returns {number} Результат вычисления выражения в скобках
   */

  interpretContainer: function(container) {
    return this.interpret(container.child);
  },

  /**
   * @function tokenize
   * @description Разбивает выражение на токены
   * @param {string} program - Входное выражение
   * @returns {Array} Массив токенов
   */

  tokenize: function(program) {
    if (program === "")
      return [];
    var regex = /\s*(=>|[-+*\/\%=\(\)]|[A-Za-z_][A-Za-z0-9_]*|[0-9]*\.?[0-9]+)\s*/g;
    return program.split(regex).filter(function (s) { return !s.match(/^\s*$/); });
  },

  /**
   * @function parse
   * @description Парсит массив токенов в синтаксическое дерево
   * @param {Array} tokens - Массив токенов
   * @returns {Object} Синтаксическое дерево
   */

  parse: function(tokens) {
    var parsed = new Parser(this.functions, tokens).parse();
    if(tokens.length !== 0)
      throw "Extra tokens: " + i(tokens);
    return parsed;
  },

  /**
   * @function parseString
   * @description Разбирает строку в синтаксическое дерево
   * @param {string} code - Входное выражение
   * @returns {Object} Синтаксическое дерево
   */

  parseString: function(code) {
    var tokens = this.tokenize(code);
    return this.parse(tokens);
  }
};

/**
 * @constructor
 * @description Парсер математических выражений
 * @param {Object} functions - Словарь функций
 * @param {Array} tokens - Массив токенов
 */

function Parser(functions, tokens) {
  this.functions = functions;
  this.tokens  = tokens;
}

Parser.prototype = {
  /**
   * @function parse
   * @description Основной метод парсинга
   * @returns {Object} Синтаксическое дерево
   */
  parse: function() {
    if(this.noInput())
      return this.noop();
    if(this.isFunction())
      return this.parseFn();
    else
      return this.parseExpr();
  },

  /**
   * @function parseFn
   * @description Парсит объявление функции
   * @returns {Object} Узел функции
   */
  parseFn: function() {
    this.shift(); // fn
    var name = this.tokens.shift();
    var args = this.parseFnArgs();
    this.shift(); // =>
    var body = this.parseExpr();
    this.validateIdentifiers(args, body);
    var fn   =  {
      type: "function",
      name: name,
      args: args,
      body: body,
    };
    return fn;
  },

  /**
   * @function shift
   * @description Извлекает следующий токен
   * @returns {string} Токен
   */
  shift: function() {
    return this.tokens.shift();
  },

  /**
   * @function parseExpr
   * @description Парсит выражение
   * @returns {Object} Узел выражения
   */
  parseExpr: function() {
    var leftExpr  = null;
    var rightExpr = null;

    if(this.tokens.length === 0)
      throw "omg!";

    if(this.isAssignment()) {
      leftExpr = this.parseAssignment();
    } else if(this.isNumber()) {
      leftExpr = this.parseNumber();
    } else if(this.isFnCall()) {
      leftExpr = this.parseFnCall();
    } else if(this.isIdentifier()) {
      leftExpr = this.parseIdentifier();
    } else if(this.opensContainer()) {
      leftExpr = this.parseContainer();
    } else if(this.isFunction()) {
      leftExpr = this.parseFn();
    } else if(this.closesContainer()) {
      throw "WHAT THE FUCK IS: " + JSON.stringify(this.tokens);
    }

    if(this.tokens.length === 0)
      return leftExpr;

    if(!this.isOperator())
      return leftExpr;

    var operator  = this.shift();
    var rightExpr = this.parseExpr();
    if((rightExpr.type !== 'operator') || (!this.shouldSwapOperators(operator, rightExpr.operator)))
      return {
        type:     "operator",
        operator: operator,
        left:     leftExpr,
        right:    rightExpr,
      };

    rightExpr.left = {
      type:     "operator",
      operator: operator,
      left:     leftExpr,
      right:    rightExpr.left,
    }
    return rightExpr;
  },

  /**
   * @function noInput
   * @description Проверяет отсутствие входных токенов
   * @returns {boolean} True если токенов нет
   */

  noInput: function() {
    return this.tokens.length === 0;
  },

  /**
   * @function noop
   * @description Создает узел пустой операции
   * @returns {Object} Узел noop
   */

  noop: function() {
    return {type: 'noop'};
  },

  /**
   * @function isFnCall
   * @description Проверяет является ли токен вызовом функции
   * @returns {boolean} Результат проверки
   */

  isFnCall: function() {
    return this.isIdentifier() && this.functions[this.tokens[0]];
  },

  /**
   * @function isNumber
   * @description Проверяет является ли токен числом
   * @returns {boolean} Результат проверки
   */

  isNumber: function() {
    return this.tokens[0].match(/^[0-9][\.0-9]*$/);
  },

  /**
   * @function isOperator
   * @description Проверяет является ли токен оператором
   * @returns {boolean} Результат проверки
   */

  isOperator: function() {
    var t = this.tokens[0] ;
    return t === '+' ||
           t === '-' ||
           t === '*' ||
           t === '/' ||
           t === '%';
  },

  /**
   * @function shouldSwapOperators
   * @description Определяет нужно ли менять порядок операторов
   * @param {string} leftOp - Левый оператор
   * @param {string} rightOp - Правый оператор
   * @returns {boolean} Нужно ли менять порядок
   */

  shouldSwapOperators: function(leftOp, rightOp) {
    return leftOp  === '*' || leftOp  === '/' || leftOp === '%' ||
           rightOp === '+' || rightOp === '-';
  },

  /**
   * @function isIdentifier
   * @description Проверяет является ли токен идентификатором
   * @returns {boolean} Результат проверки
   */

  isIdentifier: function() {
    return this.tokens[0].match(/^[a-zA-Z][_a-zA-Z0-9]*$/);
  },

  /**
   * @function isAssignment
   * @description Проверяет является ли токен присваиванием
   * @returns {boolean} Результат проверки
   */

  isAssignment: function() {
    return this.isIdentifier() && this.tokens[1] === '=';
  },

  /**
   * @function opensContainer
   * @description Проверяет является ли токен открывающей скобкой
   * @returns {boolean} Результат проверки
   */

  opensContainer: function() {
    return this.tokens[0][0] === '(';
  },

  /**
   * @function closesContainer
   * @description Проверяет является ли токен закрывающей скобкой
   * @returns {boolean} Результат проверки
   */

  closesContainer: function() {
    return this.tokens[0][0] === ')';
  },

  /**
   * @function isFunction
   * @description Проверяет является ли токен объявлением функции
   * @returns {boolean} Результат проверки
   */

  isFunction: function() {
    return this.tokens[0] === 'fn';
  },

  /**
   * @function parseNumber
   * @description Парсит числовой литерал
   * @returns {Object} Узел числа
   */

  parseNumber: function() {
    return { type: "number", value: this.tokens.shift() };
  },

  /**
   * @function parseIdentifier
   * @description Парсит идентификатор
   * @returns {Object} Узел идентификатора
   */

  parseIdentifier: function() {
    return { type: "identifier", value: this.tokens.shift() };
  },

  /**
   * @function parseAssignment
   * @description Парсит операцию присваивания
   * @returns {Object} Узел присваивания
   */

  parseAssignment: function() {
    var name = this.parseIdentifier().value;
    this.shift(); // =
    var value = this.parseExpr();
    return { type: "assignment", name: name, value: value };
  },

  /**
   * @function parseFnCall
   * @description Парсит вызов функции
   * @returns {Object} Узел вызова функции
   */

  parseFnCall: function() {
    var that = this;
    var name = this.tokens.shift();
    var fn   = this.functions[name];
    var args = fn.args.map(function(name) {
      if(that.tokens.length === 0)
        throw "Too few arguments!";
      return [name, that.parse()];
    });
    return {
      type: "fnCall",
      name: name,
      args: args,
    };
  },

  /**
   * @function parseContainer
   * @description Парсит выражение в скобках
   * @returns {Object} Узел контейнера
   */

  parseContainer: function() {
    this.shift(); // (
    var expr = this.parseExpr();
    this.shift(); // )
    return {type: 'container', child: expr};
  },

  /**
   * @function parseFnArgs
   * @description Парсит аргументы функции
   * @returns {Array} Массив аргументов
   */

  parseFnArgs: function() {
    var args = [];
    while(this.tokens[0] !== "=>")
      args.push(this.tokens.shift());
    if(this.containsDuplicates(args))
      throw "Duplicate argument names";
    return args;
  },

  /**
   * @function containsDuplicates
   * @description Проверяет наличие дубликатов в массиве
   * @param {Array} array - Массив для проверки
   * @returns {boolean} Есть ли дубликаты
   */

  containsDuplicates: function(array) {
    for(var i=0; i < array.length; ++i)
      for(var j=i+1; j < array.length; ++j)
        if(array[i] === array[j])
          return true;
    return false;
  },

  /**
   * @function validateIdentifiers
   * @description Проверяет используемые идентификаторы в теле функции
   * @param {Array} names - Допустимые имена
   * @param {Object} tree - Синтаксическое дерево
   */

  validateIdentifiers: function(names, tree) {
    var used = this.varNames(tree);
    used.forEach(function(name) {
      if(-1 === names.indexOf(name))
        throw "Unknown identifier: " + name;
    });
  },

  /**
   * @function varNames
   * @description Собирает все имена переменных в дереве
   * @param {Object} tree - Синтаксическое дерево
   * @returns {Array} Массив имен переменных
   */

  varNames: function(tree) {
    switch(tree.type) {
      case "operator":   return this.varNames(tree.left).concat(this.varNames(tree.right));
      case "number":     return [];
      case "assignment": return this.varNames(tree.value);
      case "identifier": return [tree.value];
      case "function":   return [];
      case "fnCall":
        var all = [];
        args.forEach(function(crnt) { all = all.concat(crnt); });
        return all;
      case "container":  return this.varNames(tree.child);
      case "noop":       return [];
      default:
        throw "What type is " + JSON.stringify(tree);
    }
  }
};