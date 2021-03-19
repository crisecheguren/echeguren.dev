
/*
Create an object and an array which we will use in our facebook exercise. 

1. Create an object that has properties "username" and "password". Fill those values in with strings.


2. Create an array which contains the object you have made above and name the array "database".

3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
*/

function objects() {

	console.log('Create an object that has properties "username" and "password". Fill those values in with strings.')

	let user = {
		username: "cris",
		password: "secret123",
	}

	console.log(user);

	console.log('Create an array which contains the object you have made above and name the array "database".')

	let database = [user]

	console.log(database);

	console.log('Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".')

	let newsfeed = [
		{
			username: "andu",
			timeline: "hey guys",
		},
		{
			username: "gordeux",
			timeline: "dudes",
		},
		{
			username: "sarah",
			timeline: "funny story",
		}
	]

	console.log(newsfeed);
}