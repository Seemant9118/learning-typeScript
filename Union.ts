
// // union type is used to combine two or more types in a single type variable
// let score: number | string = 33
// // number type
// score = 44
// // string type
// score = "55"

// // union type with object type 
// // User type
// type User = {
//     name: string,
//     id: number,
// }
// // Admin type
// type Admin = {
//     username: string,
//     id: number,
// }
// // union type with User and Admin
// let seemant: User | Admin = {
//     name: "seemant", id: 43
// }
// // Admin type
// seemant = { username: "sk", id: 43 }



// // union type with function
// function getDbId(id: number | string) {
//     if (typeof id === "string") {
//         id.toLowerCase();
//     }
// }
// getDbId(33);
// getDbId("33");

// // union type with array
// const data: number[] = [1, 2, 3, 4, 5];
// const data2: string[] = ["a", "b", "c", "d", "e"];
// const data3: string[] | number[] = [1, 2, 3, "a", "b", "c"]; // error : either string or number we can't mix
// const data4: (string | number)[] = [1, 2, 3, "a", "b", "c"]; // either string or number we can mix



// // union type with literal type
// let seatAllotment: "aisle" | "middle" | "window";
// seatAllotment = "middle";
// seatAllotment = "window";
// seatAllotment = "aisle";
// seatAllotment = "crew"; // error : crew is not assignable to "aisle" | "middle" | "window"