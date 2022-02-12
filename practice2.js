var i=0;
while (i<=10){
    if (i%2==0){
        console.log(i,"even")
    }
    else{
        console.log(i,"odd")
    }
    i=i+1
}
// logical
var i=0;
while (i<=100){
    if (i%3==0){
        console.log("Fizz")
    }
    else if (i%5==0){
        console.log("Buzz")
    }
    else if (i%3==0 && i%5==0){
        console.log("FizzBuzz")
    }
    else{
        console.log(i)
    }
    i=i+1
}