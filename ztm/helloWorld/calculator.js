function calculator() {

	var firstNumber = Number(prompt("what is the first number?"));
	if (isNaN(firstNumber)) {
		firstNumber = Number(prompt("please enter a number"));
	}
		
	var opType = prompt("what type of operation do you want? (+, -, *, /)");
	var secondNumber = Number(prompt("what is the second number?"));
		if (isNaN(secondNumber)) {
		secondNumber = Number(prompt("please enter a number"));
	}	
	
	if (opType === "+") {
		alert("Your number is: " + Number(firstNumber + secondNumber));
	} else if (opType === "-") {
		alert("Your number is: " + Number(firstNumber - secondNumber));
	} else if (opType === "*") {
		alert("Your number is: " + Number(firstNumber * secondNumber));
	} else if (opType === "/") {
		alert("Your number is: " + Number(firstNumber / secondNumber));
	} else if (opType === "quit") {
		alert("goodbye");
	} else {
		opType = prompt("please enter a valid operation or type 'quit'");
	}
}