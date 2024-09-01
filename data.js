console.log("Hey I hope u r fine")

// let a = 5;
// a = a + 1
// let b = 6;
// let c = "Sami";
// let _a = "Pakistan";
// vae 55a = "india"; not allowed
// console.log(a + b + 8)
// console.log(typeof a, typeof b, typeof c)
// {
//     console.log(a)
// }

// const a1 = 6;
// a1= a1 + 1; not allowed because a1 is constant
let a = 5;
a = a + 1;
{
    let a = 66;
    console.log(a)
}
console.log(a)
// There two types of Data types in Javascripts
// i) Permitive Data 
// i. Null 
let n = null;

// ii. Number 
let N = 90;

// iii. String
let s = "Sami";

// iv. Symbols
let sym1 = Symbol("Unique");

// v. Undefined
let u = undefined;

// vi.Boolean
const b = true;

// vii. Big Int
let B = 12345678909876543212345678909876543211234567890987654321;
console.log(n,N,s,sym1,u,b,B)

console.log( typeof n,typeof N,typeof s,typeof sym1,typeof u,typeof b,typeof B)

// Second data type in JS is OBJECT
let o = {
    name: "Sami",
    "jobe code": 5600,
    cell: 123456544,
    comapny: "xyz"
}
console.log(o)
o.salary = "10000000 bilions"
console.log(o)