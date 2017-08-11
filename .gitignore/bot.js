const Discord = require('discord.js');
const settings = require('./settings.json');
const prefix = "!"
const bot = new Discord.Client({disableEveryone: true});

bot.on('ready', function() {
    console.log("I'm Online");
});

bot.on("message", async message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;
	
	let messageArray = message.content.split(" ");
	let command = messageArray[0];
	let args = messageArray.slice(1);

	if(!command.startsWith(prefix)) return;
	
	if(command === `${prefix}userinfo`) {
		let embed = new Discord.RichEmbed()
			.setAuthor(message.author.username)
			.setColor("#8B59B6")
			.addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
			.addField("ID", message.author.id)
			.addField("Created At", message.author.createdAt);
			
		message.channel.sendEmbed(embed);
	} else

	if (!message.content.startsWith(prefix)) return;
	if (message.author.bot) return;

	if (message.content.startsWith(prefix + 'ping')) {
		message.channel.sendMessage(`Pong! \`${Date.now() - message.createdTimestamp} ms\``);
	} else

	if (message.content.startsWith(prefix + 'AbCdsetgame')) {
		if (!result) {
			result = null;
		}
		bot.user.setGame(result);
	}
});

bot.login(settings.token);

