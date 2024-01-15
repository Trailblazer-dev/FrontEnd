function addnumber(x:number,y:number){
    return x+y;
}
console.log(addnumber(3,6));
enum Contract{
    Permanent=1,
    Temporary,
    Apprentice
};
let employessStatus: Contract = Contract.Apprentice;
console.log(Contract[employessStatus]);

let randomvalue : unknown;
randomvalue = 1244;
randomvalue = "Thursday"
if (typeof randomvalue === "string"){
    console.log((randomvalue as string).toUpperCase());
}
else{
    console.log("Error- A string was expected")
}
//There is UNION which help describe a value can to different type hence restricting the input on the value  where it used vertical bar 
let email : string |number;
let answer: string |boolean;//here is an example of union
interface iceCream{
    flavour:"vanilla"|"strawberry"|"milkshake",
    sundaes: string,
};
interface sundae extends iceCream{
    sauce: 'chocolate' |'caramel',
    nuts?:boolean,
    flavour:"vanilla",

}