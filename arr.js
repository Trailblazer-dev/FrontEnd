let flavours = ["vanilla", "strawberry","orange", "mango","passion"];
console.log(`${flavours[2]}`);
console.log(`${flavours.length}`);
flavours.push("ovacado");
console.log(`${flavours}`);
flavours.splice(5,1);
console.log(`${flavours.length}`)
console.log(`which kind of flavour do you want? ${flavours}`)
for(let h = 0;h < flavours.length; ++h){
    console.log(flavours[h]);
}
//console.log(flavours)
g = 0;
while (g< flavours.length){
    console.log(flavours[g]);
    ++g;
}
let position = [1, 2,3,4,5,6,7];
position.forEach(position=> console.log(position));
flavours.find(flavour =>flavour ==="strawberry");