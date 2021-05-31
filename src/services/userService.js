import { users } from "../data/users.js"

export default class UserService{
    constructor(loggerServices){
        this.customers = []
        this.employees = []
        this.loggerServices = loggerServices
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
}