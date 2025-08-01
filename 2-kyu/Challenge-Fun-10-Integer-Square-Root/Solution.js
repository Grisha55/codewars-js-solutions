/**
 * @function integerSquareRoot
 * @param {string} Number 
 * @returns {string}
 */

function integerSquareRoot(Number) {
    if (Number === "0") return "0";
    
    let low = "0";
    let high = Number;
    
    while (lessThanOrEqual(low, high)) {
        let mid = divideByTwo(add(low, high));
        let midSquared = multiply(mid, mid);
        
        if (lessThanOrEqual(midSquared, Number)) {
            let nextMid = add(mid, "1");
            let nextMidSquared = multiply(nextMid, nextMid);
            if (greaterThan(nextMidSquared, Number)) {
                return mid;
            } else {
                low = nextMid;
            }
        } else {
            high = subtract(mid, "1");
        }
    }
    return low;
}

/**
 * @function add
 * @description // Helper function to add two large numbers as strings
 * @param {number []} a 
 * @param {number []} b 
 * @returns {string}
 */

function add(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = [];
    
    while (i >= 0 || j >= 0 || carry > 0) {
        let digitA = i >= 0 ? parseInt(a[i--]) : 0;
        let digitB = j >= 0 ? parseInt(b[j--]) : 0;
        let sum = digitA + digitB + carry;
        result.unshift(sum % 10);
        carry = Math.floor(sum / 10);
    }
    
    return result.join('');
}

/**
 * @function subtract
 * @description // Helper function to subtract two large numbers as strings (a >= b)
 * @param {number []} a 
 * @param {number []} b 
 * @returns {string}
 */

function subtract(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = [];
    
    while (i >= 0) {
        let digitA = parseInt(a[i--]);
        let digitB = j >= 0 ? parseInt(b[j--]) : 0;
        digitA -= carry;
        if (digitA < digitB) {
            digitA += 10;
            carry = 1;
        } else {
            carry = 0;
        }
        result.unshift(digitA - digitB);
    }
    
    // Remove leading zeros
    while (result.length > 1 && result[0] === 0) {
        result.shift();
    }
    
    return result.join('');
}

/**
 * @function multiply
 * @description // Helper function to multiply two large numbers as strings
 * @param {number []} a 
 * @param {number []} b 
 * @returns {string}
 */

function multiply(a, b) {
    if (a === "0" || b === "0") return "0";
    
    const product = Array(a.length + b.length).fill(0);
    
    for (let i = a.length - 1; i >= 0; i--) {
        for (let j = b.length - 1; j >= 0; j--) {
            const digitA = parseInt(a[i]);
            const digitB = parseInt(b[j]);
            const temp = digitA * digitB + product[i + j + 1];
            product[i + j + 1] = temp % 10;
            product[i + j] += Math.floor(temp / 10);
        }
    }
    
    
    while (product[0] === 0) {
      product.shift();
    }
    
    return product.join('');
  }
  
  /**
  * @function divideByTwo
  * @description // Helper function to divide a large number by 2
  * @param {string} numStr
  * @returns {string}
  */

function divideByTwo(numStr) {
    let result = [];
    let carry = 0;
    
    for (let i = 0; i < numStr.length; i++) {
        let digit = parseInt(numStr[i]) + carry * 10;
        result.push(Math.floor(digit / 2));
        carry = digit % 2;
    }
    
    // Remove leading zeros
    while (result.length > 1 && result[0] === 0) {
        result.shift();
    }
    
    return result.join('');
}

/**
  * @function lessThanOrEqual
  * @description // Helper function to check if a <= b
  * @param {number []} a
  * @param {number []} b
  * @returns {boolean}
  */

function lessThanOrEqual(a, b) {
    if (a.length !== b.length) {
        return a.length < b.length;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return parseInt(a[i]) < parseInt(b[i]);
        }
    }
    return true;
}

/**
  * @function greaterThan
  * @description // Helper function to check if a > b
  * @param {number []} a
  * @param {number []} b
  * @returns {boolean}
  */

function greaterThan(a, b) {
    if (a.length !== b.length) {
        return a.length > b.length;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return parseInt(a[i]) > parseInt(b[i]);
        }
    }
    return false;
}