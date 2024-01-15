let Icecream  = ["Strawberry", "vanilla","mango", "orange","blackcurrent"]
console.log(Icecream.find(flavour => flavour === "vanilla "))
//What if the customer says, I want ice cream that contains "Chocolate," what do you have?
//Now you need to reorganize your ice cream store a little and start categorizing things
Icecream = [
    {name: "Chololate", type: "chocolate"},
    {name: "Strawberry", type: "fruit"},
    {name: "Vanilla", type: "vanilla"},
    {name: "Pistacho", type: "nuts"},
    {name: "Neapolitan", type: "chocolate"},
    {name: "Mint chip", type: "chocolate"}
];
console.log(Icecream.filter(flavor => flavor.type == "chocolate")
);
/*One of your customers is allergic to "Nuts" and wants first to know whether any of your ice creams contains "Nuts."
 You check your inventory by using the some() method.
*/
console.log(Icecream.some(flavor => flavor.type === "nuts"));
//it will return true since Pistacho has nuts
/*A projection is you trying to change your array in some way. Imagine, for example, that you take your original iceCreamFlavor array and want to add a price property to each flavor. 
This situation is good case for a projection method called map()*/
Icecream.map(flavor => {
     flavor.price = 1;
     return flavor;
});
console.log(Icecream)