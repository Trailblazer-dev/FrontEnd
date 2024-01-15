"use strict";
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
    return car;
}());
