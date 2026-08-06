class Calculator {
  constructor(result=0) {
    this.result = result;
  }
  add(num) {
    this.result += num;
  }
  subtract(num) {
    this.result -= num;
  }
  multiply(num) {
    this.result *= num;
  }
  divide(num) {
    this.result /= num;
  }
  clear() {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }
  calculate(expression) {
    const expr = expression.replace(/\s+/g, '');
    if (!/^[0-9+\-*/().]+$/.test(expr)) {
      throw new Error("Invalid characters in expression");
    }
    try {
      const result = eval(expr);
      this.result = result;
      return result;
    } catch (error) {
      throw new Error("Invalid expression");
    }
  }
}
module.exports = Calculator;
const calc = new Calculator();
console.log(calc.calculate('10 + 2 * (6 - (4 + 1) / 2) + 7')); // Output: 17
