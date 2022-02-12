/*arr1=[1,2,3]
arr2=["a","b","c"]
newList=[]
for(i of arr1){
  newList.push(i)
  if (i==2){
     for(j of arr2){
        newList.push(j)
     }
  }
}
console.log(newList);*/

/*arr1=[1,2,3]
arr2=["a","b","c"]
console.log([1,2,...arr2,3])*/

/*let arr = [1,2,3];
let arr2 = [4,5];
arr = [...arr,...arr2];
console.log(arr); */

let array1 = [1,2,3,4,4,4,4,2,3,3,4,6]
let mySet = new Set(array1)
console.log(mySet)
myNewArray = [...mySet]
console.log(myNewArray)

