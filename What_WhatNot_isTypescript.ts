// What typescript does ? 

// 1.static checking : also present in various languages such as goLang, java,c++
// we get error during writing code not only on runtime

// main job of ts : analayze the code as we type. THAT's IT!

// [NOTE]: TS it's a development tool, our project still runs in JS.

// How development process works of TS:
// We Write code in .ts/.tsx format
// then, transpiled/compiled into .js/.jsx

// ex: 
// let user = { name: "Seemant", age: 10 };
// let email = user.email; // we got error during type "that email does not exist"

// let numberOne = 1;
// let numberTwo = "2";
// let sum = numberOne + numberTwo;
// console.log(sum);