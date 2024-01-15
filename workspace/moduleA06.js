//I want to create my own class which will be about housing
var house = /** @class */ (function () {
    function house(rent, water, washrooms) {
        this.rent = rent;
        this.water = water;
        this.washrooms = washrooms;
    }
    Object.defineProperty(house.prototype, "rent_", {
        get: function () {
            return "The rent is ".concat(this.rent);
        },
        set: function (rent) {
            if (rent >= 4000 && rent <= 8000) {
                this.rent = rent;
            }
            else {
                throw new Error("invalid rent price");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(house.prototype, "water_", {
        get: function () {
            return "source of water is " + this.water;
        },
        set: function (water) {
            this.water = water;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(house.prototype, "washroom", {
        get: function () {
            return "The washrooms are " + this.washrooms;
        },
        set: function (washrooms) {
            if (washrooms == 'selfcontainde' || washrooms == 'communal') {
                this.washrooms = washrooms;
            }
            else {
                throw new Error('invalid washrooms facilities');
            }
        },
        enumerable: false,
        configurable: true
    });
    //methods
    house.prototype.rooms = function (floor, ceiling, electricity) {
        var looks = "The rooms have ".concat(floor, " and about ceiling( ").concat(ceiling, " ) and finally the\n            electricity is ").concat(electricity);
        return looks;
    };
    return house;
}());
var house1 = new house(4500, 'tab', "selfcontained");
console.log(house1);
console.log(house1.rooms('tiles', true, 'token'));
