var array = [ 1, 2, 3, 4, 5, 6 ];
for (var index = 0; index < array.length; index++) {
  console.log(array[index]);
}

//Find an index of an items the Array
let fruits = ['Apple', 'Banana', 'Orange']
 
let position = fruits.indexOf('Banana')
 
console.log(position);

//Remove an item by its index position

let fruits = ['Apple', 'Banana', 'Orange']
 
let removedItem = fruits.splice(1,1)

//
let arr = ['shweta', 'nayak', 'komal', 'Zeba']
console.log(arr[0])              
console.log(arr[1])             
console.log(arr[arr.length - 1])

//

let myFavouriteGames = ["chess", "Ludo", "Badminton", "Basketball", "Carom", "Cricket"]
let removedItems = myFavouriteGames.splice(3,1)
console.log(myFavouriteGames)

