function loops() {
	
	var todos = [
		"clean room",
		"brush teeth",
		"excercise",
		"study JS",
		"make music"
	]

	for (var i = 0; i < todos.length; i++) {
		console.log(todos[i], i);
	}

	todos.forEach(function(todo, i) {
		console.log(todo, i)
	});

	var counter = 0;
	while (counter < 10) {
		console.log(counter);
		counter++;
	}

	var counterTwo = 10;
	do {
		console.log(counterTwo);
		counterTwo--;
	} while (counterTwo > 0);
}