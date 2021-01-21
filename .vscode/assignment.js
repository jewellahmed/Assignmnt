function kilometerToMeter(kilometer) {

        var meter = kilometer * 1000;//convert kilometer to meter
        return meter;
    
}

//x=number of watches,y=number of mobiles,z=number of laptops
function budgetCalculator(x,y,z) {
        
        var watchCost = 50 * x ;

        var mobileCost = 100 * y ;

        var laptopCost = 500 * z ;

        var totalCost = watchCost + mobileCost + laptopCost ;

        return totalCost ;


    
}

function hotelCost(duration) {

    var totalCost = 0 ;
    if(duration <= 10){

        totalCost = duration * 100 ;

    }
    else if(duration <= 20){

        var firstPart = 10 * 100 ;
        var remaining = duration - 10 ;
        var secondPart = remaining * 80 ;
        totalCost = firstPart + secondPart ;



    }
    else{

        var firstPart = 10 * 100 ;
        var secondPart = 10 * 80 ;
        var remaining = duration - 20 ;
        var thirdPart = remaining * 50 ;
        totalCost = firstPart + secondPart + thirdPart ;
    }

        return totalCost;

}

function megaFriend(array) {
    var longest = array[0];
    for(let i = 0;i < array.length;i++){

        const element = array[i];
        if( longest.length < element.length){
            longest = element;
            }
                 }
                return longest;
                    }