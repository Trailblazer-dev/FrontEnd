"use strict";
//I want to perfect in function
function addNumber(x, y) {
    return x + y;
}
console.log(addNumber(4, 8));
//let check on anomous function
var opening = function (time, hours) {
    return time + " " + hours;
};
console.log(opening("Dawn", "4am"));
//Below is an anomous function
var access = function (Person) {
    for (var h = 0; h < 5; ++h) {
        if (Person.name != null) {
            console.log("Welcome ".concat(Person.name, " to organizations "));
        }
        else {
            console.log("Please enter your name");
            continue;
        }
        ;
        if (Person.age >= 18 && Person.student == true) {
            console.log("You have been verified you can proceed to second floor please");
            break;
        }
        else {
            console.log("Sorry to inform you that the services you are seeking are not available for you right now");
        }
    }
    return "Thanks for coming feel free to send your feedback  using any of our emails please";
};
var output = access({
    name: "Horvald",
    age: 23,
    student: true,
    identity: "male",
});
console.log(output);
