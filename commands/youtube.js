module.exports = {
    name: 'youtube',
    description: "this is a youtube command!",
    execute(message, args){

        if(message.member.roles.cache.has('923173788537995284')) {
            message.channel.send('https://www.youtube.com');
        } else{
            message.channel.send('get da roles, bro... nah wait a sec lemme fix that');
            message.member.roles.add('923173788537995284');
        }
        
    }
}