var a,b;
a=10;
b=20;
if (a>b){
    console.log("a is greater than b")
}
else{
    console.log("b is greater than a")
}


//method 2
let readlineSync = require("readline-sync");
var num_1 = readlineSync.questionInt("enter the number:")
var num_2 = readlineSync.questionInt("enter the number:")
if (num_1>num_2){
    console.log("num_1 is greater than num_2")
}
else{
    console.log("num_2 is greater than num_1")
}

