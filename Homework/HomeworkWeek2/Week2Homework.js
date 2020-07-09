const pizzaPlace = "Mimi's Pizza Pie";

let numberOfToppings = 15;

console.log(typeof pizzaPlace)

console.log(typeof numberOfToppings)

console.log (`${pizzaPlace} has the best homemade pizza in town. You can choose from ${numberOfToppings} different toppings.`)

if (numberOfToppings >= 10) {
    console.log ("We offer a whole lot of pizza.");
} else {
    console.log("We choose to offer quality over quantity.");
}


for (count = 0; count<=numberOfToppings; count+=2) {
    console.log(count);
  }

for (let i=1; i<=numberOfToppings; i++){
    if (i % 2 === 0){
        console.log(i);
    }
}