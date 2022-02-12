//var place={name:"paris",country:"France"}
//var duplicate=Object.assign({},place);
//console.log(duplicate)

// Without a spread operator
/*var mynewCar={newCarName:"ROlls Royce",newCarColour:"brown"}
var myOldCar={oldCarName:"Lamborghini",oldCarColour:"grey"}
var allCars=Object.assign({},mynewCar,myOldCar)
console.log(allCars)*/

// with a spread operator
mynewCar={newCarName:"ROlls Royce",newCarColour:"brown"}
var myOldCar={oldCarName:"Lamborghini",oldCarColour:"grey"}
var allCars={...mynewCar,...myOldCar}
console.log(allCars);


