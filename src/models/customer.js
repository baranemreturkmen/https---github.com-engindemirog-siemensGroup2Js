import User from "./user.js"

export default class Customer extends User{
    constructor(id,firstName,lastName, age,creditCardNumber){
        super(id,firstName,lastName, age)
        this.creditCardNumber = creditCardNumber;
    }
}