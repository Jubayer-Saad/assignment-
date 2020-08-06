// Feet to Miles convert-1

function feetToMile(feet) {
    if (feet <= 0){
        return "Please give a positive number. Cause distance can't be negative.";
      }
      else {
        var miles = feet / 5280;
        miles = miles.toFixed(5);
        return miles;
      }
}

var oneMiles = feetToMile(5279);
console.log(oneMiles,'Miles');


//Wood calculator

function woodCalculator(chair, table, bed){
    var totalOfChair = chair * 1;
    var totalOfTable = table * 3;
    var totalOfBed = bed * 5;
    var totalWood = totalOfChair + totalOfTable + totalOfBed;
    return totalWood;
}

var totalCubic = woodCalculator(8, 4, 9);
console.log('Total needs', totalCubic ,'Cubics');

// Bricks Calculators

function brickCalculator(numberOfFloor){
    if(numberOfFloor => 1 && numberOfFloor <= 10){
        var totalBricks = numberOfFloor * 15000;
        return totalBricks;
    }
    else if(numberOfFloor > 10 && numberOfFloor <= 20){
        var totalBricks = ((numberOfFloor - 10) * 12000) + 150000;
        return totalBricks;
    }
    else if(numberOfFloor > 20){
        var totalBricks = ((numberOfFloor - 20) * 10000) + 270000;
    }
    else{
        return "Please enter a correct floor"
    }
}

var totalBricksNeed = brickCalculator(45);
console.log("Total Bricks Need ",totalBricksNeed);

// Tiny Friend

function tinyFriend(friend){

    var smallName = friend[0];

    for (let i = 0; i < friend.length; i++) {
        const name = friend[i];
        if(name.length < smallName.length);
        smallName = name;
    }
    return smallName;
}
var friendName = tinyFriend(["Akib","Faysal", "Noman","Jubayer", "Saad", "Mau"]);
console.log(friendName);