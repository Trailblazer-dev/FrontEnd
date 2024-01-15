interface IceCream {
    [index: number]: string;
}
let myiceCream : IceCream;
myiceCream = [`Chocolate`,`vanilla`,`strawberry`];
let mystr : string = myiceCream[0];
console.log(mystr);
console.log(myiceCream[1]);
const fetchURL =  `https://jsonplaceholder.typicode.com/posts`
//Interface describing  the shape of our json data
interface Post {
    userId :number;
    id : number;
    title: string;
    body: string;
}
async function fetchPosts(url: string){
    let response = await fetch(url);
    let  body  = await response.json();
    return body as  Post[];
        
    }
async function showPost(){
    let posts = await fetchPosts(fetchURL);
    //display the content  of the first item in the response
    let post = posts[0];
    console.log(`Post#`+ post.id)
    //if the userId is 1 , then display a note that it's an administrator
    console.log('Author:' + (post.userId ===1 ? "Administrator" :post.userId.toString()))
    console.log(`Title: `+ post.title)
    console.log(`Body: `+ post.body)
}
showPost();