class Calculator {
  constructor() {
    this.alert = "Некорректный ввод. Введите два числа."
  }

  check(firstArg, secondArg) {
    if (isNaN(firstArg) || isNaN(secondArg) || !firstArg || !secondArg) {
      return false
    }
    return true
  }

  multiplication(firstArg, secondArg) {
    if(this.check(firstArg, secondArg)) {
      return Number(firstArg) * Number(secondArg);
    }
    return this.alert;
  }

  addition(firstArg, secondArg) {
    if(this.check(firstArg, secondArg)) {
      return Number(firstArg) + Number(secondArg);
    }
    return this.alert;
  }

  substraction(firstArg, secondArg) {
    if(this.check(firstArg, secondArg)) {
      return Number(firstArg) - Number(secondArg);
    }
    return this.alert;
  }

  division(firstArg, secondArg) {
    if(this.check(firstArg, secondArg)) {
      return Number(firstArg) / Number(secondArg);
    }
    return this.alert;
  }
}

module.exports = Calculator
