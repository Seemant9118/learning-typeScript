// types availabled in typescript : Number, String, Boolean, Null, Undefined, Void, Object, Array, Tuples, Any, Never, Unknown and more

// situations where we use ts
// 1. A function accepts two numbers
// 2. A function returns a string

// syntax
// For variable: let variableName:type = value;
let greetings: string = "Hello, Seemant";
console.log(greetings);


// number
let userId: number = 3345.32;

// boolean
let isLoggedIn: boolean = false;

// cases : where to use type inference
// let laptopId: number;
// laptopId = 3245.4; // which is not quite good practice while writing in ts, it exapand our codebase

// instead we can write as well like this
// let watchId = 239404;
// watchId = "smfj"; // ts is pretty smart, it automatically detect that you previously stored a number so , after redeclaring string or anytype of data then it throw error and remind you to use number

// [Conclusion] : TS is not we can use ':'/'type inference' to defined type everywhere , no need for this


// any : if we no declared a value , also not inferenced type then it automatically assigned as 'any'
// We can use 'any' whenever we don't want a particular value to cause type checking errors
// [simple term] : Disale type checking
let hero;
function getHero() {
    return "thor";
}
hero = getHero();

let villan: any;
function getVillain() {
    return "Thanos";
}
villan = getVillain();

// instead of 'any' we can practice to use type inference , if value not defined
let ladyHero: String;
function getLadyHero() {
    return "black widow";
}
ladyHero = getLadyHero();





