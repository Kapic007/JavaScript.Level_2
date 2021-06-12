import  Calculator  from "./calculator";
import './style.css';

const calc = new Calculator;

const first = document.getElementById("firstArg");
const second = document.getElementById("secondArg");
const result = document.getElementById("result");

window.multiplication = () => {
  return (result.innerText = `Ответ: ${calc.multiplication(
    first.value,
    second.value
  )}`);
};

window.division = () => {
  return (result.innerText = `Ответ: ${calc.division(
    first.value,
    second.value
  )}`);
};

window.substraction = () => {
  return (result.innerText = `Ответ: ${calc.substraction(
    first.value,
    second.value
  )}`);
};

window.addition = () => {
  return (result.innerText = `Ответ: ${calc.addition(
    first.value,
    second.value
  )}`);
};

window.clean = () => {
  first.value = "";
  second.value = "";
  result.innerText = "Ответ:";
};
