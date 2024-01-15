//In these module I will learn about classes
/* class name{
    properties --->You can think of the properties of a class as the raw data that is passed to the object when it's initialized.
    constructor --->Is a function
    Accessors --->Is a fucntion
    Methods
}*/
class car{
    /*it appears one can control how object can be accessd outside of class by 
    using the key word,public,private,protected
    */
    private _make: string;
    private _color: string;
    protected _doors: number;
    constructor(make: string, color:string, doors:number){
        this._color = color;
        this._make = make;
        this._doors = doors;
    }
    get make():string{//get does not have a parameter but must have a return value
        return this._make;
    }
    set makes(make:string,){//set have the same name to the property they are associated with
        //also they take a single parameter and do not have  a return value
        this._make = make;
    }
    get color():string{
        return `The color of the car is ` + this._color;
    }
    set color(color:string){
        this._color = color;
    }
    get doors():number{
        return this._doors
    }
    set doors(doors:number){
        if((doors%2)===0){
            this._doors = doors;
        }
        else{
            throw new Error(`Doors must be even numbers`);
        }
    }
    //Methods
    accelerate(speed:number): string{
        return `${this.worker()} is accelerating to ${speed} MPH`
    }
    brake(): string{
        return`${this.worker()} is braking with standars braking system`
    }
    turn(direction:'left'|'right'): string{
        return `${this.worker()} is turning ${direction}`;
    }
    //This function performs work for other method functions
    protected worker():string{
        return this._make;
    }
    drive(speed:number,direction:'right'|'left'){
        const accelaratingMessage = this.accelerate(speed);
        const turnMessage = this.turn(direction);
        return `${accelaratingMessage}  ${turnMessage}`
    }
}
let car1 = new car("Toyota","black",9);
const car2 = new car("BMW","white",2);
console.log(car1.color);
console.log(car2);
const meth = car1.accelerate(70);
console.log(meth);
console.log(car2.drive(110,'left'));


class electricalCar extends car{
    private _range: number;
    /*The parameter list can include any of the properties of both the base class and the subclass. (As with all parameter lists in TypeScript, remember that required parameters must appear before optional parameters.)
In the body of the constructor, you must add the super() keyword to include the parameters from the base class. The super keyword executes the constructor of the base class when it runs.
The super keyword must appear before any references to this. when referring to properties in the subclass.*/
   constructor(make:string,color:string,range:number,doors=2){
    super(make,color,doors);
    this._range = range;
   }
    get():number{
        return this._range;
    }
    set range(range:number){
        this._range = range
    }
    //methods
    charge(){
        console.log(this.worker()+ " is charging")
    }
    // Overrides the brake method of the Car class
    brake(): string {
    return `${this.worker()}  is braking with the regenerative braking system.`
}
}
let spark =  new electricalCar('Spark Motors','silver',124,2);
let eCar = new electricalCar('Electric Car co','black',263);
console.log(eCar.doors);
spark.charge();
console.log(spark.brake());  // returns "Spark Motors is braking with the regenerative braking system"