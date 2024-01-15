let operatingSystem = "LINUX";
let distribution = "Ubuntu";
operatingSystem + distribution; //LINUXUbuntu
operatingSystem + " " + distribution ; //LINUX Ubuntu
//apart from the above method the below method can be used
'${operatingSystem} ${distribution}!';// LINUX Ubuntu!
function Morning(fname, lname,salutation = "What's up"){
    const greeting = ` ${salutation} ${fname} ${lname}`;
    console.log(greeting);
    return greeting;
}
Morning("Janet", "Mukami")
operatingSystem="windows";
console.log(operatingSystem);
let ratedAnimation=["Naruto","jujustu",2023,2003];
ratedAnimation.push("Hero  Academy");
ratedAnimation.pop();//removes the last elements
ratedAnimation.shift();//removes the first element
ratedAnimation.unshift("Naruto");
console.log(ratedAnimation);