module.exports = {
    name: 'pkick',
    description: "this is a kick command!",
    execute(message, args){
       if(message.member.permissions.has("KICK_MEMBERS")){
           message.channel.send('you can kick members')
       }else {
           message.channel.send('get da kickin perms bro')
       }
    }
}