"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// functions in TypeScript
// type annotations in function parameters
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("seemant");
function signUpUser(name, email, isPaid) { }
signUpUser("seemant", "seemant@gmail.com", false);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("seemant", "seemant@gmail.com");
// type annotations in function return type
function addThree(num) {
    return num + 2;
}
addThree(3);
// [case] : if we want to return string and boolean then both is problematic, that what we can mentioned in returned type
// later tut we learned about it
// function getValue(myVal: number):  {
//     if (myVal > 5) {
//         return true;
//     }
//     return "200 OK"
// }
// Example : In an Arrow functions
var getHello = function (s) {
    return "";
};
getHello("Hey!");
// Example : passing a list to a function
var heroes = ["thor", "spiderman", "ironmane"];
heroes.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errorMsg) {
    console.log(errorMsg);
}
function handleError(errorMsg) {
    throw new Error(errorMsg);
}
