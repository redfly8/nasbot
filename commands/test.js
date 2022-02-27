module.exports = {
    name: 'test',
    description: "testing",
    execute(message, args){
        
    
    var arr = ["test1", "hello", 'world', 'i', 'am', 'redfly',' idk', 'what', 'to', 'put', 'here', 'anymore', 'lol'];
    let x = arr.indexOf(args[0]);
    if(x == -1){return message.channel.send ("i didnt find dat")}
    var removed = arr.splice(x,1);
    message.channel.send(arr)
    

     
}}