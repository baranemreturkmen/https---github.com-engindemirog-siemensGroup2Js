import { Component, Composite, Leaf } from "./composite/composite.js";
import { ProductFactory, settings } from "./factory/factory.js";

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

