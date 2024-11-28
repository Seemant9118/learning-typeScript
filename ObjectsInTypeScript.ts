const User = {
    name: "seemant",
    email: "seemant@gmail.com",
    isActive: true,
}

// Bad behaviour of objects in typescript
function createUser({ name: string, isPaid: boolean }) {

}
let newUser = { name: "seemant", isPaid: false, email: "seem@gmail.com" }
createUser(newUser)

// little bit confusing that return type of function is object with litrals type annotations
function createCourse(): { name: string, price: number } {
    return { name: "react.js", price: 499 }
}

export { }