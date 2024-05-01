"use strict";
var myResult;
myResult = "fail";
console.log("You have ".concat(myResult));
myResult = "incomplete";
console.log("I am sorry to inform you that you exam is ".concat(myResult));
//Exercise one
var firstname;
var lastname;
var fullname;
var age;
var ukCitizen;
firstname = "Daniel";
lastname = "Jason";
fullname = firstname + " " + lastname;
age = 32;
ukCitizen = false;
if (ukCitizen) {
    console.log(`My name is ${fullname}, I am ${age}  and I am a citizen of the United Kindom`);
}
else {
    console.log(`My name is ${fullname}, I  am ${age} and I am not a citizen of the United Kindom`);
}
console.log("Exercise one is Done");
//exercise two
var Season;
(function (Season) {
    Season[Season["Fall"] = 0] = "Fall";
    Season[Season["Winter"] = 1] = "Winter";
    Season[Season["Spring"] = 2] = "Spring";
    Season[Season["Summer"] = 3] = "Summer";
})(Season || (Season = {}));
function whichMonths(season) {
    var monthsSeasons;
    switch (season) {
        case Season.Fall:
            monthsSeasons = "September to November";
            break;
        case Season.Winter:
            monthsSeasons = "December to February";
            break;
        case Season.Spring:
            monthsSeasons = "March to May";
            break;
        case Season.Summer:
            monthsSeasons = "June to August";
            break;
    }
    return monthsSeasons;
}
console.log(whichMonths(Season.Fall));
var employee = {
    Department: "Health",
    codeNumber: 3002
};
console.log("Are you from " + employee.Department + " am I right");
