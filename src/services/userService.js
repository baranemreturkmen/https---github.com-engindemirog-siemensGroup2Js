import { users } from "../data/users.js"

export default class UserService{
    constructor(loggerService){
        this.customers = []
        this.employees = []
        this.loggerService = loggerService
    }

    load(){
        for (let user of users) {
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
    }

    add(user){
        this.loggerService.log(user)
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
}