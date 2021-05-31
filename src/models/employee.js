import User from "./user.js"

export default class Employee extends User{
    constructor(id,firstName,lastName, age,employeeNumber){
        super(id,firstName,lastName, age)
        this.employeeNumber = employeeNumber;
    }
}