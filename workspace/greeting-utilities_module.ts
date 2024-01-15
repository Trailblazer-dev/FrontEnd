export function returnGreeting(greeting:String){
    let greetingLength = getLength(greeting);
    console.log(`The message from GreetingsLength_module is ${greeting}.It is ${greetingLength} characters long.`);
}
function getLength(message: String): number{
    return message.length;
}