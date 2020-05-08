const SteamUser = require('steam-user');
const client = new SteamUser();
const readline = require('readline-sync')

let steam_username = readline.question("UserName: ")
let steam_password = readline.question("Password: ")

const logOnOptions = {
	accountName: steam_username,
	password: steam_password,
};

client.logOn(logOnOptions);

client.on('loggedOn', () => {
	var count = 0
	var list_of_app_ids = []
	while (count < 32) {
		let appid_string = readline.question("Enter an appID or write done: ")
		if (appid_string == "done"){
			break;
		}else {
			var appid_int = parseInt(appid_string)
			list_of_app_ids.push(appid_int)
			var count = count + 1
		}
	}
	client.gamesPlayed(list_of_app_ids);
	console.log('Succesfully logged on and playing')
});
