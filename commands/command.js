module.exports = {
    name: 'command',
    description: "this is a command command!",
    execute(message, args, Discord){
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#304281')
       .setTitle('Rules')
       //.setURL('https://youtube.com')
       //.setDescription('this is a rule embed.')
       .addFields(
           {name: 'Rule 1', value: 'be nice'},
           {name: 'Rule 1', value: 'dont spam or earrape'},
           {name: 'Rule 1', value: 'listen to staff.'}

        


       )
       //.setImage('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.kwkc_7Yosj69YWbWlDQ-oAHaEo%26pid%3DApi&f=1')
       .setFooter('redfly-1/13/2022')

       message.channel.send(newEmbed)
    }

    
}