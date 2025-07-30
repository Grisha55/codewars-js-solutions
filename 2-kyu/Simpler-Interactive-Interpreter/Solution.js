class Interpreter {
  constructor() {
    this.vars = {};
  }

  /**
   * @function tokenize
   * @param {string} program 
   * @returns {string}
   */

  static tokenize(program) {
    if (!program.trim()) return [];
    const regex = /\s*([-+*\/\%=\(\)]|[A-Za-z_][A-Za-z0-9_]*|[0-9]*\.?[0-9]+)\s*/g;
    return program.split(regex).filter(s => /\S/.test(s));
  }

  /**
   * @function input
   * @param {string} expr 
   * @returns {string}
   */

  input(expr) {
    const tokens = Interpreter.tokenize(expr);
    if (tokens.length === 0) return '';
    
    try {
      // Проверяем на присваивание
      const equalsIndex = tokens.indexOf('=');
      if (equalsIndex > 0) {
        const varName = tokens[0];
        if (!this.isValidVariable(varName)) {
          throw new Error('Invalid assignment');
        }
        if (equalsIndex !== 1 || tokens.length < 3) {
          throw new Error('Invalid assignment');
        }
        
        const value = this.evaluate(tokens.slice(2));
        this.vars[varName] = value;
        return value;
      }
      
      // Вычисляем обычное выражение
      return this.evaluate(tokens);
    } catch (e) {
      // Тесты ожидают, что ошибки будут выбрасываться, а не возвращаться как строки
      throw e;
    }
  }

  /**
   * @function evaluate
   * @param {string []} tokens 
   * @returns {string}
   */
  evaluate(tokens) {
    const output = [];
    const operators = [];
    
    while (tokens.length > 0) {
      const token = tokens.shift();
      
      if (this.isNumber(token)) {
        output.push(parseFloat(token));
      } 
      else if (this.isVariable(token)) {
        if (!(token in this.vars)) {
          throw new Error(`Invalid identifier. No variable with name '${token}' was found.`);
        }
        output.push(this.vars[token]);
      }
      else if (token === '(') {
        operators.push(token);
      }
      else if (token === ')') {
        while (operators.length > 0 && operators[operators.length - 1] !== '(') {
          this.processOperator(output, operators);
        }
        if (operators.pop() !== '(') {
          throw new Error('Mismatched parentheses');
        }
      }
      else if (this.isOperator(token)) {
        while (operators.length > 0 && 
               this.precedence(operators[operators.length - 1]) >= this.precedence(token)) {
          this.processOperator(output, operators);
        }
        operators.push(token);
      }
      else {
        throw new Error(`Unknown token: ${token}`);
      }
    }
    
    while (operators.length > 0) {
      if (operators[operators.length - 1] === '(') {
        throw new Error('Mismatched parentheses');
      }
      this.processOperator(output, operators);
    }
    
    if (output.length !== 1) {
      throw new Error('Invalid expression');
    }
    
    return output[0];
  }

  /**
   * @function processOperator
   * @param {string []} output 
   * @param {string []} operators 
   */

  processOperator(output, operators) {
    const operator = operators.pop();
    const right = output.pop();
    const left = output.pop();
    
    if (left === undefined || right === undefined) {
      throw new Error('Invalid expression');
    }
    
    switch (operator) {
      case '+': output.push(left + right); break;
      case '-': output.push(left - right); break;
      case '*': output.push(left * right); break;
      case '/': output.push(left / right); break;
      case '%': output.push(left % right); break;
      default: throw new Error(`Unknown operator: ${operator}`);
    }
  }

  /**
   * @function isNumber
   * @param {string} token 
   * @returns {boolean}
   */

  isNumber(token) {
    return /^-?\d*\.?\d+$/.test(token);
  }

  /**
   * @function isValidVariable
   * @param {string} token 
   * @returns {boolean}
   */

  isValidVariable(token) {
    return /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(token);
  }

  /**
   * @function isVariable
   * @param {string} token 
   * @returns {boolean}
   */

  isVariable(token) {
    return this.isValidVariable(token);
  }

  /**
   * @function isOperator
   * @param {string} token 
   * @returns {boolean}
   */

  isOperator(token) {
    return ['+', '-', '*', '/', '%'].includes(token);
  }

  precedence(op) {
    switch (op) {
      case '+':
      case '-': return 1;
      case '*':
      case '/':
      case '%': return 2;
      default: return 0;
    }
  }
}