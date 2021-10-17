// The class Movie is stated below. An instance of class Movie represents a film.
class movies{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    allPG(){
        return "The Rating of the Movie "+ this.title +" is "+ this.rating;
    }
    printall(){
        return this.rating;
    }
    getPG(array){
        var arr=[];
        for(var i=0;i<array.length;i++){
            if(array[i].rating!=undefined){
                arr.push(rating)
            }
        }
        return arr
    }
}
let Movie=new movies(" The Shawshank Redemption","Castle Rock Entertainment","PG18")
let Movie1=new movies(" The Godfather ","Paramount Pictures","PG13")
let Movie2=new movies(" The Dark Knight ","Warner Bros ")
let Movie3=new movies(" Casino Royale ",  "Eon Productions", "PG­13")
console.log(Movie3.allPG())
console.log(Movie2.allPG())
console.log(Movie1.printall())
var array=["Movie","Movie1","Movie2"]
console.log(getPG(array))