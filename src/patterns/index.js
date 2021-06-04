import { Component, Composite, Leaf } from "./composite/composite.js";
import { Task } from "./facade/facade.js";
import { ProductFactory, settings } from "./factory/factory.js";
import Api from "./singleton/singleton.js";

import {TaskServiceManager} from "./facade/facade.js"
import { Book, BookService, giftWrap } from "./decorator/decorator.js";
import {TrafficLight} from "./state/state.js"


let factory = new ProductFactory();

let productService = factory.create(settings.siemens)

console.log(productService.add())

let main = new Composite("Ana Menü")
let menuA1 = new Composite("Açılır Menü 1")
main.addChild(menuA1)
main.addChild(new Leaf("Sabit Menü 1"))
main.addChild(new Leaf("Sabit Menü 2"))
menuA1.addChild(new Leaf("Sabit Menü 3"))

console.log(Component.createMenu(main));

let api1 = new Api("testurl")
console.log(api1.getEndpoint());

let api2 = new Api("produrl")
console.log(api2.getEndpoint());

let task1 = new Task("Task 1", 1 , "Iteration 1", "Engin", false);

let taskManager = new TaskServiceManager(task1);
taskManager.completeAndNotify();


let book1 = new Book("Sefiller","Victor Hugo",23)

let bookService = new BookService(book1);

 giftWrap(bookService)

console.log(bookService.getDetailsWhenGiftWrapped())
//console.log(bookService.getDetails());


const trafficLight = new TrafficLight();

console.log(trafficLight.sign())

trafficLight.change();
console.log(trafficLight.sign())

trafficLight.change();
console.log(trafficLight.sign())

trafficLight.change();
console.log(trafficLight.sign())

trafficLight.change();
console.log(trafficLight.sign())