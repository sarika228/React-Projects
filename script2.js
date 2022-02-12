function display(a){
    document.getElementById("screen").value+=a;
}
function compute(){
    let x=document.getElementById("screen").value;
    let y=eval(x);
    document.getElementById("screen").value=y;
}
function clr(){
    document.getElementById("screen").value="";

}