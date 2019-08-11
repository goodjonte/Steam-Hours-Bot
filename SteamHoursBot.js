const SteamUser = require('steam-user');
const client = new SteamUser();

const logOnOptions = {
	accountName: "",//insert user name between""
	password: "",//insert password between""
};

client.logOn(logOnOptions);

client.on('loggedOn', () => {
	client.gamesPlayed([]);//Insert steam app Ids here between [], seperate with commas
	console.log('succesfully logged on and playing')
});

