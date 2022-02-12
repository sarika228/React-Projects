var a=[4,4,1,3]
var i=0
var max=0
var count=0
while (i<a.length){
    if (a[i]>max){
        max=a[i]
        a[i]=max
    }
    if (max==a[i]){
        count=count+1
    }
    i=i+1
}
console.log(max)
console.log(count)


    