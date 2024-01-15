namespace Greeting{
    export function returnGreeting(greeting:string){
        console.log(`The message from namespace Greeting is ${greeting}.`);
    }
}
namespace GreetingWithLength{
    export function returnGreeting(greeting: string){
        let greetingLength = getLength(greeting);
        console.log(`The message from namespace GreetingWithLength is ${greeting}. It is ${greetingLength} charactger long`);
    }
    function getLength(message: string): number{
        return message.length;
    }

}
//If you want to make a function or class available to code outside of the namespace, add the export keyword before its name. 
//returnGreeting('Hello');                     // Returns error
Greeting.returnGreeting('Bonjour');         // OK
GreetingWithLength.returnGreeting('Hola');  // OK