//I want to create my own class which will be about housing
class house{
    rent:number;//
    water:'tab'|'tank'|'borehole';//tab,tanks or borehole
    washrooms:string;//selfcontained or communal
    constructor(rent:number,water:'tab'|'tank'|'borehole',washrooms:string){
        this.rent = rent;
        this.water = water;
        this.washrooms = washrooms;
    }
    get rent_(): string{
        return `The rent is ${this.rent}`;
    }
    set rent_(rent:number){
        if (rent >= 4000 && rent <=8000){
            this.rent = rent;
        } 
        else{
            throw new Error(`invalid rent price`);
        }
    }
    get water_(): string{
        return `source of water is ` + this.water;
    }
    set water_(water:'tab'|'tank'|'borehole'){
        this.water = water;
    }
    get washroom(): string{
        return `The washrooms are `+ this.washrooms;
    }
    set washroom(washrooms:string){
        if (washrooms=='selfcontainde'||washrooms == 'communal'){
            this.washrooms = washrooms;
        }
        else{
            throw new Error('invalid washrooms facilities');
        }
    }
        //methods
        rooms(floor:string,ceiling:Boolean,electricity:'token'|'shared bill'): string{
            const looks = `The rooms have ${floor} and about ceiling( ${ceiling} ) and finally the
            electricity is ${electricity}`;
            return looks;
        }
    }
    const house1 = new house(4500,'tab',"selfcontained")
    console.log(house1);
    console.log(house1.rooms('tiles',true,'token'));
