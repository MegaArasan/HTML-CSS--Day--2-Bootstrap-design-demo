class uber_price{
    constructor(timeofride,ridedistance){
        this.timeofride=timeofride;
        this.ridedistance=ridedistance;
    }
    fareofcustomer(){
// BaseFare+((Costperminute*timeoftheride)+(costpermile*ridedistance)*surgeboostmultiplier)+bookingfee=PassengersRideFare
    return "The Ridefare of Customer is: $" +( 9*(((0.30*this.timeofride ) + (0.85*this.ridedistance)) * 4) + 1.85 );
    }
}
const customer1=new uber_price(102,37.5)
console.log(customer1.fareofcustomer())