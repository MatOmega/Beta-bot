const Discord = require('discord.js');
const settings = require('./settings.json');
const prefix = "!"
const bot = new Discord.Client({disableEveryone: true});
const { RichEmbed } = require('discord.js'),

bot.on('ready', function() {
    console.log("I'm Online");
});

bot.on("message", async message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;
	
	let messageArray = message.content.split(" ");
	let command = messageArray[0];
	let args = messageArray.slice(1);

	if(!command.startsWith(settings.prefix)) return;

	if (!message.content.startsWith(settings.prefix)) return;
	if (message.author.bot) return;

	if (message.content.startsWith(settings.prefix + 'ping')) {
		message.channel.sendMessage(`Pong! \`${Date.now() - message.createdTimestamp} ms\``);
	};

bot.on('message', message => {
	if(message.content.startsWith(settings.prefix + "info")) {
	message.channel.sendEmbed({
			author: {
			name: bot.user.username,
			icon_url: bot.user.avatarURL
		},
			filds: [{
			name: 'Guilds',
			value: `I am In ${bot.guilds.size} Guilds`,
			inline: true
		},
		{
			name: 'Total users',
			value: `${bot.guilds.reduce((p, c) => c.memberCount, 0)} users`,
			inline: true
		},
		{
			name: 'MatΩ𝖒𝖊𝖌𝖆',
			value: `<@127439037383311360`,
			inline: true
		},
		{
			name: 'Uptime',
			value: `${require('ms')(bot.uptime, {long:true})}`,
			inline: true
	}]
})}});

	bot.on('message', message => {
		if(message.content.startsWith(settigns.prefix + 'serverinfo')) {
			message.channel.send({
				embed: {
				color: 11206655,
				author: {
					name: `${message.guild.name}`,
					icon_url: message.guild.iconURL
					},
					"thumbnail": {
					"url": `${message.guild.iconURL}`
					},
					filds: [{
					name: "Default Guild Channel",
					value: `${message.guild.defaultChannel}`
					},
					{
					name: "Guild Owner",
					value: `${message.guild.owner}`
					},
					{
					name: "Total Amount of Members",
					value: `${message.guild.memberCount} Members`
					},
					{
					name: "Server Made",
					value: `${message.guild.createdAt.toLocaleString()}`
					},
				],
				timestamp: new Date(),
				footer: {
					icon_url: bot.user.avatarURL,
					text: `${message.guild.name} is a group by ${bot.user.username}`
				}
			}
		})
	}
});

bot.login(settings.token);
