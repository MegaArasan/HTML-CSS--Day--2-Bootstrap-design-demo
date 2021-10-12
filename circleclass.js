class circle{
    constructor(radius=1.0,color="red"){
        this.radius=radius;
        this.color=color;
    } 
    getcircle(){
        return this.radius
    }
    fullcircle(radius,color){
        return "The color of the circle is "+color +" and radius is "+radius
    }
    setradius(radius){
      return radius =radius
    }
    getcolor(color){
        return color
    }
    setcolor(col){
        return col
    }
    tostring(){
        return [this.color,this.radius]
    }
    getArea(){
        return 22/7*this.radius*this.radius
    }
    getcircumference(){
        return 2*22/7*this.radius
    }
}
const round=new circle(5,"Skyblue")
console.log(round.getArea())
console.log(round.getcircumference())
console.log(round.tostring())
console.log(round.setcolor("Black"))
console.log(round.setradius(6))
console.log(round.getcircle())
console.log(round.fullcircle(110,"crimson"))