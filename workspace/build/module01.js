"use strict";
//I want to create a script which variable have two options like 
function socialmedia(name, nickname) {
    if (typeof name === "string" && typeof nickname === "string") {
        return name + nickname;
    }
    if (typeof name === "number" && typeof nickname === "number") {
        return name + nickname;
    }
    throw new Error("Your name and nickname can only be a string or a number");
}
console.log(socialmedia("Toads", '4842'));
console.log("here are the numbers ".concat(socialmedia(3234, 9382)));
var newManager = {
    employeeID: 123456,
    age: 34,
    stockPlan: true
};
console.log(newManager);
var message = "Hello I am Trailblazer and it seems I am lost can you show me the way?";
message.toUpperCase();
console.log(message);
