import { users } from "../data/users.js"
import { DataError } from "../models/dataError.js"
import Customer from "./models/customer.js"

export default class UserService{
    constructor(loggerServices){
        this.customers = []
        this.employees = []
        this.errors = []
        this.loggerServices = loggerServices
    }

    load(){
        for (let user of users) {
            switch (user.type) {
                case "customer":
                    if(this.validateCustomerData(user)){
                        let customer = this.loadCustomer(user)
                        if(customer){
                            this.customers.push(user)
                        }else{
                            this.errors.push(new DataError("invalid customer data",user))
                        }
                        
                    }
                    
                    break;
                case "employee":
                    this.employees.push(user)
                    break;            
                default:
                    this.errors.push(new DataError("invalid user", user))
                    break;
            }
        }
    }
    loadCustomer(user){
        try {
            let customerToLoad = new Customer(
                user.id, user.firstName, user.lastName, user.age, user.creditCardNumber
            )
            return customerToLoad
        } catch (error) {
            this.errors.push(new DataError("error loading customer", user))
        }
        return null;
    }
    validateCustomerData(user){
        let requiredFields = "id firstName lastName age creditCardNumber".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!user[field]) {
                this.errors.push(new DataError(`invalid field ${field}`,user))
                hasErrors = true;
            }
        }

        if(Number.isNaN(Number.parseInt(user.age))){
            this.errors.push(new DataError("invalid age",user))
            hasErrors = true;
        }

        return !hasErrors;
  
    }
    add(user){
        this.runLoggers(this.loggerServices,user);
        switch (user.type) {
            case "customer":
                this.customers.push(user)
                break;
            case "employee":
                this.employees.push(user)
                break;            
            default:
                break;
        }
    }

    runLoggers(loggerServices,data){
        for (const loggerService of loggerServices) {
            loggerService.log(data)
        }
    }

    getCustomerById(id){
        return this.customers.find(c=>c.id===id)
    }

    getCustomersSortedByFirstName(){
        return this.customers.sort((customer1,customer2)=>{
            if(customer1.firstName<customer2.firstName){
                return 1;
            }else if(customer1.firstName>customer2.firstName){
                return -1
            }else{
                return 0;
            }
        })
    }
}