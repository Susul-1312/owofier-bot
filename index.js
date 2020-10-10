// requires and stuff
require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.TOKEN;

client.on("ready", () => {
	console.log("I'm in");
	console.log(client.user.username);
});

client.on("message", msg => {
	if (!msg.member.roles.cache.some((role) => role.name == "OwO")) return; // checking if user has OwO role

	msgToSend = msg.content // setting msgToSend so it doesnt break on every edit

	msgToSend = msgToSend.split("l").join("w"); // making it more OwO

	let msgEmbed = new Discord.MessageEmbed()
		.setAuthor(msg.author.username, msg.author.avatarURL())
		.setDescription(msgToSend); // creating the embed

	if (msg.content.toLowerCase().includes("owo") || msg.content.toLowerCase().includes("uwu")) msgEmbed.setColor("#"+("000000"+Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6)) // changing the color if the message contains "owo" or "uwu"

	msg.channel.send(msgEmbed); // sending the embed

	msg.delete(); // removing the bad unowo message
});

client.login(token);
