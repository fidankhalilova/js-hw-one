// 5. Verilmiş object-də neçə açar (key) olduğunu tap
// Məsələn: {name: "Ali", age: 25, city: "Baku"} → 3

// var a = {
//     name: "Ali", 
//     age: 25, 
//     city: "Baku"
// };
// var count = 0;

// for(let key in a) {
//     if(a.hasOwnProperty(key)) {
//         count++;
//     }
// }

// console.log(count);

// 6. Object-də yalnız rəqəm olan dəyərlərin cəmini tap
// Məsələn: {a: 10, b: "hello", c: 20, d: 30} → 60

// var user = {
//     a: 10, 
//     b: "hello", 
//     c: 20, 
//     d: 30
// };
// var sum = 0;

// for(let key in user) {
//     if(typeof user[key] === "number") {
//         sum += user[key];
//     }
// }

// console.log(sum);