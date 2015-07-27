var person = function(name,age){
	this.name = name;
	this.age = age;	
}
person.prototype.sayhello = function sayhello(){
		console.log("Hi, my name is "+ this.name);
	}

var person1 = new person("LiLei",23);
var person2 = new person("Hanmeimei",24);
var person3 = new person("Choupi",26);
console.log(person1.name);

person1.sayhello();
person2.sayhello();
person3.sayhello();


//console.log(document.getElementById("div1"))

//var div1 = document.getElementById("div1");
//console.log(div1.style)
//div1.style.height = "200px";
// function checkCookies(){
// 	if( navigator.cookieEnabled==true){
// 		alert("Cookies 已启用")
// 	}else{
// 		alert("Cookies未启用")
// 	}
// }

function changeContent(){
	var content = document.getElementById("change");
	content.innerHTML="New Text!";
	content.style.color = "red";
}

function displayContent(){
	var content = document.getElementById("change");
	content.style.visibility = "visible";

}
function hideContent(){
	var content = document.getElementById("change");
	content.style.visibility = "hidden";
    
}
function hoverAction(){
	console.log(11111)
	var neirong = document.getElementById("mouseover");
	neirong.innerHTML = "这么听话，O(∩_∩)O哈哈~";
}
function mouseOut(){
	var neirong = document.getElementById("mouseover");
	neirong.innerHTML = "不要走~~~~~(>_<)~~~~ ";
}
function onClick(){
	var neirong = document.getElementById("mouseover");
	neirong.innerHTML = "点击干嘛";
}
function change(){
	var a = document.getElementById("changeid")
	console.log(a)
	a.value = a.value.toUpperCase();
}

function focus1(x)
{

x.style.backgroundColor="yellow"
}

function mousedown(){
	var mouse = document.getElementById("shubiao");
	mouse.innerHTML = "鼠标点下了，弹起来试试";
	mouse.style.backgroundColor = "yellow";

}
function mouseup(){
	var mouse = document.getElementById("shubiao");
	mouse.innerHTML = "鼠标弹起来了";
	mouse.style.backgroundColor = "green";
}


function parag(){
	var element = document.getElementById("shubiao")
	var para = document.createElement("p")
	var node = document.createTextNode("这是新段落")
	para.appendChild(node)
	element.appendChild(para)
}

function mousemove(){

	var x = event.pageX;
	var y = event.pageY;
	console.log(event)
	var div = document.getElementById("div1")
	div.style.top = y + "px";
	div.style.left = x+ "px";




}
function keydown(){
	console.log(event)
	var div = document.getElementById("div1")
	
	var top =0;
	if(div.style.top){
		 top = parseInt(div.style.top);
	}
	
	if(event.keyCode == 40){
		top += 40;
		div.style.top = top + "px";
	}
	if(event.keyCode == 39){
	

	div.style.left = div.style.left + 40+ "px";
	}

}