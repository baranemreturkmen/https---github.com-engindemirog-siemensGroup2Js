var getPrice = carpan => 10*carpan;
//console.log(typeof getPrice)
//console.log(getPrice(5));
console.log(getPrice.hasOwnProperty('prototype'))

var invoice = {
    number : 125,
    print : function (params) {
        console.log(this)
    },
    print2 : ()=>console.log(this)
}

invoice.print();
invoice.print2();

let getProduct = function(productId = 1000,name){
    console.log(productId + " : " + name)
}

getProduct(undefined,'Laptop');

let calculateBaseTax = () => 0.18

let getTotal = function (price, tax = 10, price2) {
    console.log(arguments.length)
}

getTotal(10,undefined,150)


//console.log(getTotal(1000))

let baseTax =0.18

let getTotal2 = function (price = adjustment, adjustment = 10) {
    console.log(price + adjustment)
}

getTotal2();

let showCategories = function (productId, ...categories) { //rest
    console.log(categories)
}

showCategories(1, 'computers', "technology" )


var prices = [100,150,50]
var newPrices = [...prices,60]
var maxPrice = Math.max(...prices) //spread
console.log(prices)
console.log(newPrices)
console.log(prices===newPrices)

console.log(..."Merhaba")
console.log([..."ABC",..."DEF",..."GHI"])


let salaries = [5000,10000,undefined,30000]
let [low, average, high=20000] = salaries

console.log(average)
console.log(high)

let salaries2 = [10,20,[30,40]]
let a,b,c,d;
[a,b,[c,d]] = salaries2

console.log(...salaries2)

console.log(a)
console.log(b)
console.log(c)
console.log(d)

function someFunction([low,average],high = 30000) {
    console.log(average)
}

someFunction([10000,20000],3000)


let salaryObject ={
    low1:10000,
    average1: 20000,
    high1 : 30000
}

let newLow, newAverage, newHigh1
({low1:newLow,average1:newAverage,high1:newHigh1} = salaryObject)
console.log(newAverage)