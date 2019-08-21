const SteamUser = require('steam-user');
const SteamTotp = require('steam-totp')
const client = new SteamUser();
const readline = require('readline-sync')

let steamusername = readline.question("UserName: ")
let steampassword = readline.question("Password: ")

const logOnOptions = {
	accountName: steamusername,//insert user name between""
	password: steampassword,//insert password between""
};

client.logOn(logOnOptions);

client.on('loggedOn', () => {
	client.gamesPlayed([]);//Insert steam app Ids here between [], seperate with commas
	console.log('Succesfully logged on and playing')
});
