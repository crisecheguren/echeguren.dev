function arrayAssignment() {

	console.log("using this array:");

	var array = ["Banana", "Apples", "Oranges", "Blueberries"];

	console.log(array);

	console.log("Remove the Banana from the array");

	array.shift();

	console.log(array);

	console.log("Sort the array in order");

	array.sort();

	console.log(array);

	console.log("Put 'Kiwi' at the end of the array");

	array.push("Kiwi");

	console.log(array);

	console.log("remove 'Apples' from the array");

	let pos = array.indexOf('Apples');

	array.splice(pos,1);

	console.log(array);

	console.log("Sort the array in reverse order. (Not alphabetical, but reverse");
	console.log("the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a']");

	console.log('you should have at the end: ["Kiwi", "Oranges", "Blueberries"]');

	array.reverse();

	console.log(array);

	console.log('using this array: var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];');
	console.log ('access "Oranges"');

	var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

	console.log(array2[1][1][0]);
}