var David,Vinoth,Divya,Ishitha,Thomas;
David=80;
Vinoth=77;
Divya=88;
Ishitha=95;
Thomas=68;
avg=(David+Vinoth+Divya+Ishitha+Thomas/5)*100;
if (avg>90 && avg<=100){
    console.log("grade A")
}
else if(avg>80 && avg<=90){
    console.log("grade B")
}
else if(avg>70 && avg<=80){
    console.log("grade C")
}
else if(avg>60 && avg<=70){
    console.log("grade D")
}
else{
    console.log("grade F")
}