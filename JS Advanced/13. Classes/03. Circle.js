class Circle{
    constructor(radius){
        this.radius=radius
    }
    get diameter() {
        return Number(this.radius*2)
    }
    set diameter(value){
        this.radius=value/2;
        
    }
    get area(){
        let ar= Number(this.radius)**2*Math.PI
        return ar 
    }
}