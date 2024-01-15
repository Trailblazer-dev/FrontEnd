function addnumber(x, y) {
    return x + y;
}
console.log(addnumber(3, 6));
var Contract;
(function (Contract) {
    Contract[Contract["Permanent"] = 1] = "Permanent";
    Contract[Contract["Temporary"] = 2] = "Temporary";
    Contract[Contract["Apprentice"] = 3] = "Apprentice";
})(Contract || (Contract = {}));
;
var employessStatus = Contract.Apprentice;
console.log(Contract[employessStatus]);
var randomvalue;
randomvalue = 1244;
randomvalue = "Thursday";
if (typeof randomvalue === "string") {
    console.log(randomvalue.toUpperCase());
}
else {
    console.log("Error- A string was expected");
}
//There is UNION which help describe a value can to different type hence restricting the input on the value  where it used vertical bar 
var email;
var answer; //here is an example of union
;
