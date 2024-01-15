var Greeting;
(function (Greeting) {
    function returnGreeting(greeting) {
        console.log("The message from namespace Greeting is ".concat(greeting, "."));
    }
    Greeting.returnGreeting = returnGreeting;
})(Greeting || (Greeting = {}));
var GreetingWithLength;
(function (GreetingWithLength) {
    function returnGreeting(greeting) {
        var greetingLength = getLength(greeting);
        console.log("The message from namespace GreetingWithLength is ".concat(greeting, ". It is ").concat(greetingLength, " charactger long"));
    }
    GreetingWithLength.returnGreeting = returnGreeting;
    function getLength(message) {
        return message.length;
    }
})(GreetingWithLength || (GreetingWithLength = {}));
//If you want to make a function or class available to code outside of the namespace, add the export keyword before its name. 
//returnGreeting('Hello');                     // Returns error
Greeting.returnGreeting('Bonjour'); // OK
GreetingWithLength.returnGreeting('Hola'); // OK
