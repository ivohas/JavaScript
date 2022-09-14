function fruit(type,weight,pricePerKG){
let a=weight/1000;
let money= a*pricePerKG;
console.log(`I need $${money.toFixed(2)} to buy ${a.toFixed(2)} kilograms ${type}.`);
}
fruit('orange', 2500, 1.80);