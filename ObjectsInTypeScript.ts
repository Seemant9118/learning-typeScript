// without type annotations
const User = {
    name: "seemant",
    email: "seemant@gmail.com",
    isActive: true,
}
// Bad behaviour of objects in typescript is that it allows to add extra properties
function createUsers({ name: string, isPaid: boolean }) { }
let newUser = { name: "seemant", isPaid: false, email: "seem@gmail.com" }
createUsers(newUser)

// little bit confusing that return type of function is object with litrals type annotations
function createCourse(): { name: string, price: number } {
    return { name: "react.js", price: 499 }
}


// [Type Alias] `type` keyword is used to create a type alias
type User = {
    name: string,
    email: string,
    isActive: boolean,
}
// function decleration with type alias
function createUser(user: User): User {
    return { name: "", email: "", isActive: true };
}
// function call with type alias
createUser({ name: "", email: "", isActive: true });


// Object decleration with type alias
type User1 = {
    readonly _id: string, // it's not mutable
    name: string,
    email: string,
    isActive: boolean,
    creditCardDetails?: number, // optional property '?' , it's not mandatory
}
// object decleration with type decleration
let myUser1: User1 = {
    _id: "1234",
    name: "seemant",
    email: "seemant@gmail.com",
    isActive: false,
}
// object mutation
myUser1.email = "s@gmail.com";
// myUser1._id = "12345"; // error : is is readonly marked so not mutable

// combining two objects with type alias
type cardNumber = {
    cardNum: number,
}
type cardDate = {
    cardDate: string,
}
type cardDetails = cardNumber & cardDate & { cvv: string }




export { }