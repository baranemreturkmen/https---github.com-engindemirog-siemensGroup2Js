import User from "./models/user.js"
import Customer from "./models/customer.js"
import UserService from "./services/userService.js";
import { EmailService, FirebaseServiceAdapter, MonoLoggerService, PushNotificationService, SmsService } from "./services/baseLoggerService.js";

let user = new User(1,"Engin","Demiroğ",36)
console.log(user.firstName);

let customer = new Customer(1,"Engin","Demiroğ",36,"123456");

console.log(customer);

let userService = new UserService([new FirebaseServiceAdapter(),new SmsService(),new MonoLoggerService()]);
userService.load();

customer.type = "customer"
userService.add(customer);
console.log(userService.customers)
console.log(userService.employees)




//SOLID