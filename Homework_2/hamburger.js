class Hamburger {
  constructor(size, stuffing, condiment, mayonnaise) {
    this.size = size;
    this.stuffing = stuffing;
    this.condiment = condiment;
    this.mayonnaise = mayonnaise;
    this.price = {
      little: 50,
      big: 100,
      cheese: 10,
      salad: 20,
      potatoes: 15,
      condiment: 15,
      mayonnaise: 20,
    };
    this.calories = {
      little: 20,
      big: 40,
      cheese: 20,
      salad: 5,
      potatoes: 10,
      condiment: 0,
      mayonnaise: 5,
    };
    this.result = {
      price: 0,
      calories: 0,
    };
  }

  calculatePrice() {
    let condimentPrice = this.condiment ? this.price.condiment : 0;
    let mayonnaisePrice = this.mayonnaise ? this.price.mayonnaise : 0;
    this.result.price =
      this.price[this.size] + this.price[this.stuffing] + condimentPrice + mayonnaisePrice;
  }
  calculateCalories() {
    let condimentCalories = this.condiment ? this.calories.condiment : 0;
    let mayonnaiseCalories = this.mayonnaise ? this.calories.mayonnaise : 0;
    this.result.calories =
      this.calories[this.size] + this.calories[this.stuffing] + condimentCalories + mayonnaiseCalories;
  }
}

function burgerSubmit(event) {
  event.preventDefault();

  let size = document.forms["hamburger_form"].elements["size"].value;
  let stuffing = document.forms["hamburger_form"].elements["stuffing"].value;
  let condiment =
    document.forms["hamburger_form"].elements["toppings"][0].checked;
  let mayonnaise =
    document.forms["hamburger_form"].elements["toppings"][1].checked;

  const resultHamburger = new Hamburger(size, stuffing, condiment, mayonnaise);
  resultHamburger.calculatePrice();
  resultHamburger.calculateCalories();

  document.querySelector(".hamburger_price").innerText = `${resultHamburger.result.price}`;
  document.querySelector(".hamburger_calories").innerText = `${resultHamburger.result.calories}`;
}
