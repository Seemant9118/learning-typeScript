
// Array
const user: (string | number)[] = [2, 'John', 'Doe', 1];

// Tuple : order is important and fixed length is important 
let userT: [string, number, boolean];
userT = ['John', 30, true]; // OK
// userT = [30, 'John', true]; // Error because the order is wrong


// Tuple Array
let rgb: [number, number, number];
rgb = [255, 223, 134,]; // OK


// Tuple Array with fixed length 
type User = [number, string, string, number];
const newUser: User = [2, 'John', 'john@gmail.com', +919999999999];
// mutating the tuple
newUser[1] = 'seemant'; // OK
// newUser[2] = 23; // Error because the type is wrong , order matters
