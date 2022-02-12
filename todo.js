function Showtasks(list){
    var user = document.getElementById("input1");
    var todolist = document.getElementById("todoList");
    var list1 = JSON.parse(localStorage.getItem("keys"));
    var allli = " ";
    var index = 0;
    for (i of list1){
        allli += "<li>"+i+"<input type='button' value='delete' onclick='deletetask("+index+")'/> </li>";
        index ++;
    }
    document.getElementById("todoList").innerHTML = allli;
    var list2 = JSON.parse(localStorage.getItem("keys"));
    var show = "You have " + index + " task";
    document.getElementById("footer").innerHTML = show;
    deletetask(index);
};

function addBtn(){ 
    var element = document.getElementById("input1");
    var getkey = localStorage.getItem("keys");
    var list = [];
    if (getkey == null){
        list.push(element.value);
        localStorage.setItem("keys",JSON.stringify(list));
    }
    else{
        var a = localStorage.getItem("keys");
        var text = JSON.parse(a);
        text.push(element.value);
        localStorage.setItem('keys',JSON.stringify(text));
    }
    element.value = " ";
    Showtasks(list);
};

function clearALl(){
    var data = document.getElementById("input1");
    var footer = document.getElementById("footer");
    localStorage.removeItem("keys");
    document.getElementById("todoList").innerHTML = " ";
    document.getElementById("footer").innerHTML = " ";
};

function deletetask(index){
    var list = JSON.parse(localStorage.getItem("keys"));
    list.splice(index,1);
    localStorage.setItem("keys",JSON.stringify(list));
    Showtasks(list);
}