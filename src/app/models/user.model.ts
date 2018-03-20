import {Car} from '../models/car.model';

export class User
{
    public username:String;
    public fname: String;
    public lname: String;
    public phone:String;
    public email:String;
    public age:String;
    public city:String;
    public license:String;
    public usertype   : String;
    public verified : Boolean; //this field works as flag for driving license approval
    bookedcar : [{
            type : Car
            ref : "car"

    }];
    blocked : Boolean  // this field gives facility to admin to block a user
    public password : String;

    constructor(
                username : string,
                fname : string,
                lname : string,
                phone : string,
                email : string,
                password: string,
                age : string,
                city : string,
                license : string,
                usertype : string,
                verified : boolean,
                blocked : boolean

    ){
        this.username = username;
        this.fname = fname;
        this.lname = lname;
        this.phone = phone;
        this.email = email;
        this.age = age;
        this.city = city;
        this.license = license;
        this.usertype = usertype;
        this.verified = verified;
        this.blocked = blocked;
        this.password = password;
    
    }
}