//I want to create a script which variable have two options like 
function socialmedia(name: string|number,nickname : string|number){
    if (typeof name === "string"&& typeof nickname === "string"){
        return name + nickname;
    }
    if (typeof name === "number" && typeof nickname === "number"){
        return name + nickname;
    }
    throw new Error("Your name and nickname can only be a string or a number");
}
console.log(socialmedia("Toads", "fog4842"));
console.log(`here are the numbers ${socialmedia(3234, 9382)}`);
//console.log(`here I have mixed number and string ${socialmedia(213,"kill")}`)
//Intersection uses amperstand
//Below is an example
interface Employess{
    employeeID: number;
    age : number;
}
interface Manager {
    stockPlan : boolean;
}
type ManagementEmployee = Employess & Manager;
let newManager: ManagementEmployee = {
    employeeID: 123456,
    age: 34,
    stockPlan: true
};
console.log(newManager)
let message: string = "Hello I am Trailblazer and it seems I am lost can you show me the way?";
message.toUpperCase();
console.log(message);