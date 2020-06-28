const pizzaPlace = "Mimi's Pizza Pie";

let numberOfToppings = 10;

console.log(typeof pizzaPlace)

console.log(typeof numberOfToppings)

console.log (`${pizzaPlace} has the best homemade pizza in town. You can choose from ${numberOfToppings} different toppings.`)

if (numberOfToppings >= 10) {
    console.log ("We offer a whole lot of pizza.");
} else {
    console.log("We choose to offer quality over quantity.");
}


for (let numberOfToppings =0; numberOfToppings<=10; numberOfToppings+=2) {
    console.log(numberOfToppings);
} 