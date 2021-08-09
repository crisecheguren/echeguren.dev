var _ = require('lodash');

console.log(_);

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("randomizer");

body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background;
}


function textContent() {
	css.textContent = body.style.background;
}

textContent();

btn.addEventListener("click", function() {
	body.style.background = "linear-gradient(to right, rgb(" + Math.floor(Math.random() * 256) +", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + "), rgb(" + Math.floor(Math.random() * 256) +", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + "))";
	css.textContent = body.style.background;
})

color1.addEventListener("input", setGradient);
	
color2.addEventListener("input", setGradient);