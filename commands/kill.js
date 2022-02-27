const { Client } = require("discord.js");

module.exports = {
    name: 'kill',
    description: "this is a kill command",
    execute(message, args, Discord) {
        if(message.member.permissions.has("ADMINISTRATOR")){
            process.exit();
        }else{
            return message.channel.send("you don't have those permissions")
        }
        
        
    }
}