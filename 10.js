const n=5;
str=''
j=1
m=9
for(var i=0;i<n;i++){
    if (i==0 || i==3){
        for(var k=0;k<n;k++){
            str+=j+k+" "
        }
    console.log(str)
    j+=4
    str=""
    }
    else{
        for(var k=0;k<n;k++){
            str+=m+k+" "
        }
    console.log(str)
    m+=4
    str="" 
    }
}