// var button = document.getElementsByTagName("button")[0]

// button.addEventListener("click", function (){
// 	console.log("click!")
// }) 

var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");
var hasDoneClass = document.getElementsByClassName("done");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0)  {
		createListElement();
	}
}

function addListAfterEnter(event) {
	if (inputLength() > 0 && event.keyCode === 13)  {
		createListElement();
	}
}

ul.onclick=function(event){
	var target=event.target;
	console.log(target.tagName);
	var btn=document.createElement("button");
	if (target.tagName === "LI") {
		target.classList.toggle("done");
	}
	if (hasDoneClass.length && target.childNodes.length <= 1) {
		btn.appendChild(document.createTextNode("Delete!"));
		target.appendChild(btn);
	}
	btn.onclick=removeParent;
}

	

function listLength(){
	return listItems.length;
}



function removeParent(evt){
	evt.target.parentNode.remove();
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterEnter);

