const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'ODYxNDU0OTA0MTkxMzUyODUy.YOKCZg.7HyygbWe0MAfxN9lCGLR_YoIuQg';

const PREFIX = 's!';

bot.on('ready', () =>{
  console.log('Salute bot is online!');
  })

bot.on('message', msg=>{
  if(msg.content === "HELLO"){
    msg.reply('**HELLO MY MANN!! JUST GOT RESPONDED LMFAO**');
  }
})
