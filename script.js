//alert("This is a simple JavaScript alert!");
console.log("Hello, world!");
console.log("Mary "+ "MarKind"+"(function)");
var name= "world";
name=324.;
console.log(name);
let sticky = "yes";
sticky = "yested";
console.log(sticky +name);


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for input
rl.question('Enter a value: ', (answer) => {
  console.log(`User entered: ${answer}`);
  rl.close();
});
function netflix(){
    console.log("rated series");
}

netflix();
