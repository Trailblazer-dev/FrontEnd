//here is an object
var people = {
    gender: "Male",
    age: 23,
    student: true
};
console.log(people);
//enums is a special class that represents 
var teams;
(function (teams) {
    teams[teams["mancity"] = 1] = "mancity";
    teams[teams["manunited"] = 2] = "manunited";
    teams[teams["arsenal"] = 3] = "arsenal";
    teams[teams["chelsea"] = 4] = "chelsea";
})(teams || (teams = {}));
;
var myteam = teams.chelsea;
console.log(myteam);
function graph(Points) {
    return "The point on the x axis and y axis respectively are ".concat(Points.x, ",").concat(Points.y);
}
graph({ x: 3, y: 7 });
console.log(graph({ x: 3, y: 8 }));
var table = {
    length: 20,
    width: 49
};
console.log(table);
//class are use to create blueprint of objects
/*There are three main visibility modifiers in TypeScript.

    public - (default) allows access to the class member from anywhere
    private - only allows access to the class member from within the class
    protected - allows access to the class member from itself and any classes that inherit it,*/
var triangle = /** @class */ (function () {
    function triangle(height, base) {
        this.height = height;
        this.base = base;
    }
    triangle.prototype.getArea = function () {
        return 1 / 2 * this.base * this.height;
    };
    return triangle;
}());
;
var area = new triangle(6, 8);
console.log(area);
console.log(area.getArea());
var Square = /** @class */ (function () {
    function Square(height, widht) {
        this.length = height;
        this.width = widht;
    }
    Square.prototype.area = function () {
        return "The area of square is ".concat(this.length, "*").concat(this.width, " = ") + this.length * this.width;
    };
    return Square;
}());
var ans = new Square(43, 94);
console.log(ans.area());
