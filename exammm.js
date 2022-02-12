// let n=require("readline-sync")
// var a=n.questionInt("enter any number:")
// var i=1;
// while (i<=a){
//     var j=1
//     while (j<=10){
//         multiply=i*j;
//         console.log(i,"*",j,"=",multiply)
//         j++
//     }
//     i++
// }

let n=require("readline-sync")
var name=n.question("enter any name:")
const stor=name
var string=""
for(var i=name.length-1; i>=0; i--){
    string=string+name[i]
}
if(string===stor){
    console.log("palindrome hai")
}
else{
    console.log("palindrome nhi h")
}