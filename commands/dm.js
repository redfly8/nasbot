const { Client } = require("discord.js");

module.exports = {
    name: 'dm',
    description: "this is a ping command",
    execute(message, args, Discord) {
        const person = message.mentions.users.first();
        const member = message.author;
        

        member.send(`${person.tag}`)
        
        
    }
}