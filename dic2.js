var myHome = {
    "name": "Mannat",
    "location":"Mumbai",
    "Colour":"black",
    "owner":"sharukh khan",
    "neighbours": ["everything!"]
  };
  
  
 myHome.name="my Villa";
  
 console.log(myHome);
// deleting property
var myHome = {
    "name": "Mannat",
    "location":"Mumbai",
    "Colour":"black",
    "owner":"sharukh khan",
    "neighbours": ["everything!"],
    "isGood":true
  };
  
  delete myHome.isGood;
  console.log(myHome)
 