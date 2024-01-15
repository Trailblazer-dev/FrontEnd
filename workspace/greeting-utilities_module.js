"use strict";
exports.__esModule = true;
exports.returnGreeting = void 0;
function returnGreeting(greeting) {
    var greetingLength = getLength(greeting);
    console.log("The message from GreetingsLength_module is ".concat(greeting, ".It is ").concat(greetingLength, " characters long."));
}
exports.returnGreeting = returnGreeting;
function getLength(message) {
    return message.length;
}
