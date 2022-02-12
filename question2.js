let n=require("readline-sync");
var choose_ascii=n.questionInt("enter number: ");
var i=97;
var ascii_char=i+choose_ascii;
while (i<=ascii_char){
    console.log(String.fromCharCode(i))
    i++;
}