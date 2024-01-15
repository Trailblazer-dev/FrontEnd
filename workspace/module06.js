var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//In these module I will learn about classes
/* class name{
    properties --->You can think of the properties of a class as the raw data that is passed to the object when it's initialized.
    constructor --->Is a function
    Accessors --->Is a fucntion
    Methods
}*/
var car = /** @class */ (function () {
    function car(make, color, doors) {
        this._color = color;
        this._make = make;
        this._doors = doors;
    }
    Object.defineProperty(car.prototype, "make", {
        get: function () {
            return this._make;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(car.prototype, "makes", {
        set: function (make) {
            //also they take a single parameter and do not have  a return value
            this._make = make;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(car.prototype, "color", {
        get: function () {
            return "The color of the car is " + this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(car.prototype, "doors", {
        get: function () {
            return this._doors;
        },
        set: function (doors) {
            if ((doors % 2) === 0) {
                this._doors = doors;
            }
            else {
                throw new Error("Doors must be even numbers");
            }
        },
        enumerable: false,
        configurable: true
    });
    //Methods
    car.prototype.accelerate = function (speed) {
        return "".concat(this.worker(), " is accelerating to ").concat(speed, " MPH");
    };
    car.prototype.brake = function () {
        return "".concat(this.worker(), " is braking with standars braking system");
    };
    car.prototype.turn = function (direction) {
        return "".concat(this.worker(), " is turning ").concat(direction);
    };
    //This function performs work for other method functions
    car.prototype.worker = function () {
        return this._make;
    };
    car.prototype.drive = function (speed, direction) {
        var accelaratingMessage = this.accelerate(speed);
        var turnMessage = this.turn(direction);
        return "".concat(accelaratingMessage, "  ").concat(turnMessage);
    };
    return car;
}());
var car1 = new car("Toyota", "black", 9);
var car2 = new car("BMW", "white", 2);
console.log(car1.color);
console.log(car2);
var meth = car1.accelerate(70);
console.log(meth);
console.log(car2.drive(110, 'left'));
var electricalCar = /** @class */ (function (_super) {
    __extends(electricalCar, _super);
    /*The parameter list can include any of the properties of both the base class and the subclass. (As with all parameter lists in TypeScript, remember that required parameters must appear before optional parameters.)
In the body of the constructor, you must add the super() keyword to include the parameters from the base class. The super keyword executes the constructor of the base class when it runs.
The super keyword must appear before any references to this. when referring to properties in the subclass.*/
    function electricalCar(make, color, range, doors) {
        if (doors === void 0) { doors = 2; }
        var _this = _super.call(this, make, color, doors) || this;
        _this._range = range;
        return _this;
    }
    electricalCar.prototype.get = function () {
        return this._range;
    };
    Object.defineProperty(electricalCar.prototype, "range", {
        set: function (range) {
            this._range = range;
        },
        enumerable: false,
        configurable: true
    });
    //methods
    electricalCar.prototype.charge = function () {
        console.log(this.worker() + " is charging");
    };
    // Overrides the brake method of the Car class
    electricalCar.prototype.brake = function () {
        return "".concat(this.worker(), "  is braking with the regenerative braking system.");
    };
    return electricalCar;
}(car));
var spark = new electricalCar('Spark Motors', 'silver', 124, 2);
var eCar = new electricalCar('Electric Car co', 'black', 263);
console.log(eCar.doors);
spark.charge();
console.log(spark.brake()); // returns "Spark Motors is braking with the regenerative braking system"
