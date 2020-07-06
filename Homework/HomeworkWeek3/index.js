
//outputs a list with the size, crust, and toppings
let pizzaToppings = ["Pepperoni", "Sausage", "Black Olives", "Pineapple"]; 
for (let toppings of pizzaToppings) {
    console.log(toppings);
}

function greetCustomer(params) {
  console.log(
    `Welcome to Amy's Pizza Palace, our toppings are ${pizzaToppings}`);
}
greetCustomer()

function getPizzaOrder() {
  let size = window.prompt("What size pizza?");
  let crust = window.prompt("What type of crust?");
  let pizzaToppings2 = window.prompt("What toppings would you like?");
  console.log(
    `One ${size} ${crust} crust pizza with ${pizzaToppings2} coming right up!`
  );
  }

getPizzaOrder()

function order(size, crust, pizzaToppings2) {
  return size;
}

console.log(order);

function preparePizza(size1, crust1, pizzaToppings2-1) {
  console.log("Pizza is cooking");
  return [(
    size1: size;
    crust1: ,
    pizzaToppings2-1: 
    )];
}
