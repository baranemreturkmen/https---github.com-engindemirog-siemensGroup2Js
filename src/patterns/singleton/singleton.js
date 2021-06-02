export default class Api{
    constructor(endpoint){
        if(Api.exists){
            return Api.instance;
        }
        this._endpoint = endpoint;
        Api.instance = this;
        Api.exists = true;

    }

    //spring ioc, serviceCollection, autofac, castle
    //IoC 
    //scope and hoisting
    //singleton
    //percall   (x1,x2) x1===x2 = true
    //transient (x1,x2) x1===x2 = false
    //low level wins

    //scss

    getEndpoint(){
        return this._endpoint;
    }

    setEndpoint(endpoint){
        this._endpoint = endpoint;
    }
}