//here is an object
let people: {gender: string,age: number,student: boolean} = {
    gender :"Male",
    age:23,
    student:true,
};
console.log(people);
//enums is a special class that represents 
enum teams{
    mancity = 1,//by default the first value is zero
    manunited,
    arsenal,
    chelsea
};
let myteam = teams.chelsea;
console.log(myteam);
//Aliases and Interface allow values to be easy shared between  different variables/object
//Below is an example of alias
type points={
    x:number;
    y:number;
};
function graph(Points:points){
    return `The point on the x axis and y axis respectively are ${Points.x},${Points.y}`;
}
graph({x:3,y:7});
console.log(graph({x:3,y:8}))
interface measurement{
    length:number;
    width: number;
}
let table:measurement={
    length:20,
    width:49
};
console.log(table);
//class are use to create blueprint of objects
/*There are three main visibility modifiers in TypeScript.

    public - (default) allows access to the class member from anywhere
    private - only allows access to the class member from within the class
    protected - allows access to the class member from itself and any classes that inherit it,*/

class triangle{
    public constructor(private readonly height:number,private readonly base:number){
    
    }
    public getArea(){
        return 1/2 * this.base*this.height
    }
};
const area = new triangle(6,8);
console.log(area)
console.log(area.getArea())     
class Square implements measurement{
    length:number;
    width: number;
    public constructor(height:number,widht:number){
         this.length = height;
        this.width = widht;
    }
    public area(){
        return `The area of square is ${this.length}*${this.width} = `+ this.length*this.width;
    }
}
const ans = new Square(43,94);
console.log(ans.area());