var a=[1,7,2,4]
var b=[]
let i=0
while (i<a.length){
    var j=i+1
    while (j<a.length){
        c=a[i]+a[j]
        b.push(c)
        j=j+1
    }
    i=i+1
}
console.log(b)

