type Result ="pass" | "fail" |"incomplete";
let myResult : Result;
myResult = "fail";
console.log(`You have ${myResult}`);
myResult= "incomplete"
console.log(`I am sorry to inform you that you exam is ${myResult}`)
//Exercise one
let firstname: string;
let lastname: string;
let fullname: string;
let age: number;
let ukCitizen: boolean;
firstname = "Daniel";
lastname = "Jason";
fullname = firstname + " " + lastname;
age = 32;
ukCitizen = false;
if (ukCitizen){
    console.log("My name is " + fullname + ", I am " + age + " and I am a citizen of the United Kindom");
}
else{
    console.log("My name is " + fullname +" ,I  am " +age+ " and I am not a citizen of the United Kindom");
}
console.log("Exercise one is Done");
//exercise two
enum Season {
    Fall ,
    Winter,
    Spring,
    Summer
}
function whichMonths(season: Season){
    let monthsSeasons: string;
    switch (season){
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
/*The difference between enums and interfaces is that enums are used to define set of constants value while interfaces are used to define 
the structure and contract of objest and clasese */
interface Employees{
    Department: string;
    codeNumber: number;
    race?:string;//use ? where the value is optional or is not recquire
}
let employee: Employees = {
    Department: "Health",
    codeNumber: 3002
}
console.log("Are you from " + employee.Department +" am I right");