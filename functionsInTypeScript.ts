// functions in TypeScript
// type annotations in function parameters
function addTwo(num: number) {
    return num + 2;
}
addTwo(5);

function getUpper(val: string) {
    return val.toUpperCase();
}
getUpper("seemant");

function signUpUser(name: string, email: string, isPaid: boolean) { }
signUpUser("seemant", "seemant@gmail.com", false);


let loginUser = (name: string, email: string, isPaid: boolean = false) => { }

loginUser("seemant", "seemant@gmail.com");



// type annotations in function return type
function addThree(num: number): number {
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
const getHello = (s: string): string => {
    return ""
}
getHello("Hey!");

// Example : passing a list to a function
const heroes = ["thor", "spiderman", "ironmane"];
heroes.map((hero: string): string => {
    return `hero is ${hero}`
});

function consoleError(errorMsg: string): void {
    console.log(errorMsg);
}

function handleError(errorMsg: string): never {
    throw new Error(errorMsg);
}

export { };