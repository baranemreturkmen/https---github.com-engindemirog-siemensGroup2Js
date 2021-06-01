export class BaseProductService{
    constructor(){

    }

    add(){}
}

export class SimensProductService extends BaseProductService{
    constructor(){
        super()
    }
    add(){
        console.log("Siemens : added")
    }
}

export class FakeProductService extends BaseProductService{
    constructor(){
        super()
    }
    add(){
        console.log("Fake : added")
    }
}
export const settings = {siemens:"siemens",fake:"fake"}
export class ProductFactory{
    create(type){
        switch (type) {
            case settings.siemens:
                return new SimensProductService()
            case settings.fake:
                return new FakeProductService()
            default:
                throw({"exception":"Wrong product service type"})
                //throw new Error("Wrong product service type")
        }
    }
}