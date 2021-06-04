export class Light{
    constructor(light){
        this.light = light;
    }
}

export class RedLight extends Light{
    constructor(){
        super("red");
    }

    sign(){
        return "STOP";
    }
}

export class YellowLight extends Light{
    constructor(){
        super("yellow");
    }

    sign(){
        return "STEADY";
    }
}

export class GreenLight extends Light{
    constructor(){
        super("green");
    }

    sign(){
        return "GO";
    }
}

export class TrafficLight{
    constructor(){
        this.availableStates = [new GreenLight(), new RedLight(), new YellowLight()]
        this.current = this.availableStates[0]
    }

    sign(){
       return this.current.sign();
    }

    change(){
        let totalStates = this.availableStates.length
        let currentIndex = this.availableStates.findIndex(light=>light===this.current)
        if(currentIndex+1<totalStates){
            this.current = this.availableStates[currentIndex+1]
        }else{
            this.current = this.availableStates[0]
        }
    }
}


