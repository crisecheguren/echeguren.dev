function facebook() {


	let database = [
		{
			username: "coog",
			password: "secret",
		}
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

	function signIn(user, pass) {
		if (user === database[0].username && pass === database[0].password) {
			console.log(newsFeed);
		} else {
			alert("Sorry, wrong and password!")
		}
	}

	signIn(userNamePrompt, passwordPrompt);

};