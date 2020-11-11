// const Discord = require('discord.js')
require('dotenv').config();
'use strict';

// Import the discord.js module
const Discord = require('discord.js');
// Create an instance of a Discord client
const client = new Discord.Client();
const { prefix } = require('./config.json');
client.login( process.env.API_KEY);

client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

client.on('message',(msg)=>{
    var today = new Date();
    if(msg.content.startsWith(prefix) && msg.content.toLowerCase().includes('time')){
    msg.reply(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds())
    }
})