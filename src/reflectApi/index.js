class Product{
    constructor(id,name,unitPrice){
        
        this.id = id;
        this.name = name;
        this.unitPrice = unitPrice
    }

    getDetail(bisey){
        console.log(`${this.id} ${this.name} ${this.unitPrice}`)
        console.log(bisey)
    }
}

let product = new Product()
product.bisey ="Bişey"

Product.bisey2 ="Bişey 2"



//console.log(typeof Reflect)

//let product1 = new Product();
//console.log(product1)

// let product2 = Reflect.construct(Product,[])
// console.log(product2)
// console.log(product2 instanceof Product)

let product3 = Reflect.construct(Product,[1,"Acer Laptop",15000])
console.log(product3.name)

Reflect.apply(Product.prototype.getDetail,
    {id:100, name:"Asus Laptop", unitPrice:16000},["Bir bilgi"])

class Customer{
    constructor(){
        console.log("Customer constructed")
    }
}

class IndividualCustomer extends Customer{

}

console.log(Reflect.getPrototypeOf(IndividualCustomer)())

let setup = {
    getId(){
        return 55;
    }
}

let customer = new Customer()
Reflect.setPrototypeOf(customer,setup)
console.log(customer.getId())


class Credit{
    constructor(){
        this.id = 60;
    }
}

let credit1 = new Credit();
console.log(Reflect.get(credit1,"id"))

Reflect.set(credit1,"id",77)
console.log(Reflect.get(credit1,"id"))
Reflect.deleteProperty(credit1,"id")
console.log(Reflect.get(credit1,"id"))

class Person {
    constructor(){
        this.id = 85
    }
}

class Student extends Person{
    constructor(){
        super()
        this.firstName ="Engin"
    }
}

let student = new Student();
console.log(Reflect.ownKeys(student))

Reflect.defineProperty(student,"lastName",{value:"Demiroğ"})

console.log(student.lastName)

console.log(student.firstName)
Reflect.deleteProperty(student,"lastName")
console.log(student.lastName)

let object1 = {
    property1: 42
  };

object1.property2 = 50;
Reflect.preventExtensions(object1)
console.log(object1.property2)
//object1.property3 = 150;

console.log(object1.property3)

console.log(Reflect.isExtensible(object1))
console.log(Reflect.isExtensible(student))