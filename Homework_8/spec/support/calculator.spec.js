const Calculator = require("../../src/calculator");

const calc = new Calculator();
const message = 'Некорректный ввод. Введите два числа.';

describe("Метод calc.multiplication()", () => {
  it("должен возвращать -500 при аргументах (100, -5)", () => {
    expect(calc.multiplication(100, -5)).toBe(-500);
  });

  it("должен возвращать 10 при аргументах (20, 0.5)", () => {
    expect(calc.multiplication(20, 0.5)).toBe(10);
  });

  it("должен возвращать 'Некорректный ввод. Введите два числа.' при аргументах (asd, 0.5)", () => {
    expect(calc.multiplication('asd', 0.5)).toBe(message);
  });

  it("должен возвращать 'Некорректный ввод. Введите два числа.' при аргументах (10, null)", () => {
    expect(calc.multiplication(10, null)).toBe(message);
  });

  it("должен возвращать 'Некорректный ввод. Введите два числа.' при аргументах (undefined, 5)", () => {
    expect(calc.multiplication(undefined, 5)).toBe(message);
  });
});

describe("Метод calc.addition()", () => {
  it("должен возвращать 95 при аргументах (100, -5)", () => {
    expect(calc.addition(100, -5)).toBe(95);
  });

  it("должен возвращать 20.5 при аргументах (20, 0.5)", () => {
    expect(calc.addition(20, 0.5)).toBe(20.5);
  });

  it("должен возвращать 'Некорректный ввод. Введите два числа.' при аргументах (asd, 0.5)", () => {
    expect(calc.addition('asd', 0.5)).toBe(message);
  });

  it("должен возвращать 'Некорректный ввод. Введите два числа.' при аргументах (10, null)", () => {
    expect(calc.addition(10, null)).toBe(message);
  });

  it("должен возвращать 'Некорректный ввод. Введите два числа.' при аргументах (undefined, 5)", () => {
    expect(calc.addition(undefined, 5)).toBe(message);
  });
});

describe("Метод calc.substraction()", () => {
  it("должен возвращать 105 при аргументах (100, -5)", () => {
    expect(calc.substraction(100, -5)).toBe(105);
  });

  it("должен возвращать 19.5 при аргументах (20, 0.5)", () => {
    expect(calc.substraction(20, 0.5)).toBe(19.5);
  });

  it("должен возвращать 'Некорректный ввод. Введите два числа.' при аргументах (asd, 0.5)", () => {
    expect(calc.substraction('asd', 0.5)).toBe(message);
  });

  it("должен возвращать 'Некорректный ввод. Введите два числа.' при аргументах (10, null)", () => {
    expect(calc.substraction(10, null)).toBe(message);
  });

  it("должен возвращать 'Некорректный ввод. Введите два числа.' при аргументах (undefined, 5)", () => {
    expect(calc.substraction(undefined, 5)).toBe(message);
  });
});

describe("Метод calc.division()", () => {
  it("должен возвращать 105 при аргументах (100, -5)", () => {
    expect(calc.division(100, -5)).toBe(-20);
  });

  it("должен возвращать 40 при аргументах (20, 0.5)", () => {
    expect(calc.division(20, 0.5)).toBe(40);
  });

  it("должен возвращать 'Некорректный ввод. Введите два числа.' при аргументах (asd, 0.5)", () => {
    expect(calc.division('asd', 0.5)).toBe(message);
  });

  it("должен возвращать 'Некорректный ввод. Введите два числа.' при аргументах (10, null)", () => {
    expect(calc.division(10, null)).toBe(message);
  });

  it("должен возвращать 'Некорректный ввод. Введите два числа.' при аргументах (undefined, 5)", () => {
    expect(calc.division(undefined, 5)).toBe(message);
  });
});