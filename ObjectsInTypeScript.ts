const User = {
    name: "seemant",
    email: "seemant@gmail.com",
    isActive: true,
}

// Bad behaviour of objects in typescript
function createUsers({ name: string, isPaid: boolean }) {

}
let newUser = { name: "seemant", isPaid: false, email: "seem@gmail.com" }
createUsers(newUser)

// little bit confusing that return type of function is object with litrals type annotations
function createCourse(): { name: string, price: number } {
    return { name: "react.js", price: 499 }
}


// Type Alias
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

export { }