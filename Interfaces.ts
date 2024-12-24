
// --- What is interface in TypeScript?

// It is a structure that acts as a contract in our application. 
// It defines the syntax for classes to follow. 
// Classes that are derived from an interface must follow the structure provided by their interface. 
// It is a way to define a contract in your code as well as let the TypeScript know the shape of the data.

// --- Differnece between interface and type in TypeScript
// 1. type we can define using type keyword vs interface keyword for interface
// 2. interface we can extend using extends keyword vs type we can use intersection (&) to combine multiple types
// 3. type cannot be changed outside of its declaration vs interface can be extended in multiple declarations


interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrial: () => string, // method1: Function type declaration using longhand
    startTrial(): string, // method2: Function type declaration using shorthand
    getCoupon(couponName: string): number
}

interface User {
    githubToken: string,
}

interface Admin extends User {
    role: "admin" | "ta" | "learner",
}

const seemant: Admin = {
    dbId: 1,
    role: "admin",
    email: "seemant@gmail.com",
    userId: 43,
    githubToken: "github124",
    startTrial: () => "Trial started",
    getCoupon: (name: "seemant") => {
        return 10;
    }
}


seemant.email = "sk@gmail.com";
// seemant.dbId = 3; // Error: Cannot assign to 'dbId' because it is a read-only property.