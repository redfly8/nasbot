module.exports = {
    name: 's',
    description: "this is a ban report command",
    execute(message, args, Discord) {
        const reason = args.splice(1, args.length ).join(' ')
        const admin = message.author
        const target = args[0]
       
        const repo_embed = new Discord.MessageEmbed() 
        .setColor('#990000')
        .setTitle('ban ⛔')
        .addFields(
            { name: 'server', value: 'silage' },
            { name: 'banning admin', value: admin },
            { name: 'target', value: `${target}` },
            { name: 'reason', value:  reason}
            );
        message.guild.channels.cache.find(c => c.name == "adminchannel").send(repo_embed);
        
        
        message.delete();
        
        

        
        
        
    }
}