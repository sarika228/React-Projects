var i,j,c;
// c=""
i=1
while (i<=5){
    j=1
    while (j<=i){
        //console.log("*")
        c=c+("*");
        j=j+1
    }
    console.log(c)
    c="";
    i=i+1
}