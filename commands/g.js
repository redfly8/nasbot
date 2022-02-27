module.exports = {
    name: 'g',
    description: "this is a ban report command",
    execute(message, args, Discord) {
        if(message.members.cache.roles.has('923173788537995284')){message.channel.send('you need the fs admin role for this command.')}
        const reason = args.splice(1, args.length ).join(' ')
        const admin = message.author
        const target = args[0]
       
        const repo_embed = new Discord.MessageEmbed() 
        .setColor('#990000')
        .setTitle('ban ⛔')
        .addFields(
            { name: 'server', value: 'grain' },
            { name: 'banning admin', value: admin },
            { name: 'target', value: `${target}` },
            { name: 'reason', value:  reason}
            );
        message.guild.channels.cache.find(c => c.name == "adminchannel").send(repo_embed);
        
        
        message.delete();
        
        

        
        
        
    }
}