const Discord = require('discord.js')
const client = new Discord.Client()
key = process.env.API_KEY
client.login(key)
client.on('ready',()=> {
    console.log('Ready bro')
})

client.on('message',(msg)=>{
    var today = new Date();
    if(msg.content.includes('time')){
    msg.reply(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds())
    }
})
