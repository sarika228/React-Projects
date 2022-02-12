var Name=prompt("please enter name:")
var store=document.links
for(var i=0; i<store.length; i++){
    if(store[i].text===Name){
        console.log(store[i])
    }
}
