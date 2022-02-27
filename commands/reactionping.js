module.exports = {
    name: 'reactionping',
    description: "this is a reactionrole command",
    async execute(message, args, Discord, client){
       const channel = '933034036216102922'
       const pingRole = message.guild.roles.cache.find(role => role.name === "ping");
       const pingEmoji = '😃';

       let embed = new Discord.MessageEmbed()
       .setColor('#007700')
       .setTitle('get the ping role')
       .setDescription('this role is there if you want to be pinged if someone needs help in game.\n\n'
            + `${pingEmoji} for the ping role`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(pingEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return
            if(!reaction.message.guild) return

            if(reaction.message.channel.id == channel){
                if(reaction.emoji.name === pingEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(pingRole);
                } else return message.channel.send('wrong emoji')
            }else return message.channel.send('wrong channel')
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return
            if(!reaction.message.guild) return

            if(reaction.message.channel.id == channel){
                if(reaction.emoji.name === pingEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(pingRole);
                }
            }else return
        });
    }
}