function facebookImproved() {
	let database = [
		{
			username: "coog",
			password: "secret",
		},
		{
			username: "sarah",
			password: "123",
		},
		{
			username: "gord",
			password: "password",
		},
	];

	let newsFeed = [
		{
			username: "Bobby",
			timeline: "JS is da bomb",
		},
		{
			username: "Sally",
			timeline: "Thank you, TomDaBombadil19!",
		}
	]

	let userNamePrompt = prompt("What's your username?");
	let passwordPrompt = prompt("What's your password?");

	function isUserValid(username, password) {
		for (var i=0; i < database.length; i++) {
			if (database[i].username === username && database[i].password === password) {
				return true;
			}
		}
		return false;
	}


	function signIn(user, pass) {

		if (isUserValid(user, pass)) {
			console.log(newsFeed);
		} else {
			alert("Sorry, wrong and password!")
		}
	}

	signIn(userNamePrompt, passwordPrompt);
}