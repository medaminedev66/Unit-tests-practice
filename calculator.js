class Calculator {
  add(...nums) {
    let total = 0;
    nums.forEach((num) => (total = total + num));
    return total;
  }
  multiply(...nums) {
    let total = 1;
    nums.forEach((num) => (total = total * num));
    return total;
  }

  divide(a, b) {
    return a / b;
  }
  subtract(a, b) {
    return a - b;
  }
}
module.exports = Calculator;
