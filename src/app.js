import User from "./models/user.js"
import Customer from "./models/customer.js"

let user = new User(1,"Engin","Demiroğ",36)
console.log(user.firstName);

let customer = new Customer(1,"Engin","Demiroğ",36,"123456");

console.log(customer);