let books=[{title:"Speaking JavaScript",author:"Axel Rauschmayer",pages:460},
{title:"Programming JavaScript Application",author:"Eric Elliott",pages:254},
{title:"Understanding ECMAScript 6",author:"Nicholas C. Zakas",pages:352}];
console.log(books);
books.push({title:"Learn JavaScript Design Patterns",author:"Addy Osmani",pages:254});
console.log(`${books.length} app the books include ${books[0]},`);

let person = {};
person.name="Mark";
person.surname="Helena";
console.log(`${person.name} ${person.surname}`);
let newbook =[];
newbook= books.slice(2,4);
console.log(newbook.length);
books.shift();
console.log(books.length);
let numberOfpages = books[0].pages+books[1].pages+books[2].pages;
console.log(numberOfpages);