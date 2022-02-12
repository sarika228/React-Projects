/*var actor = {
    name: 'Krish',
    realName: 'Hrithik Roshan'
  };
  var name     = actor.name;
  var realName = actor.realName;
  console.log(name);
  console.log(realName);*/
 
//

var actor = {
    name: 'Krish',
    realName: 'Hrithik Roshan'
  };
  
 ({name,realName} = actor);
 console.log(name);     
 console.log(realName); 

//without paranthesis
var actor = {
    name: 'Krish',
    realName: 'Hrithik Roshan'
  };
  
 const {name,realName} = actor;
 console.log(name);     
 console.log(realName); 
  
 