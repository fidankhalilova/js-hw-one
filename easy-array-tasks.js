// 1. Verilmiş array-in bütün elementlərinin cəmini tapın
// Məsələn: [1, 2, 3, 4, 5] → 15

// var a = [1, 2, 3, 4, 5];
// var sum = 0;

// for(let i = 0; i < a.length; i++) {
//     sum += a[i];
// }

// console.log(sum);


// 2. Array-də ən böyük elementi tapın
// Məsələn: [3, 7, 2, 9, 1] → 9

// var a = [3, 7, 2, 9, 1];
// var maks = 0;

// for(let i = 0; i < a.length; i++) {
//     if(a[i] >= maks) {
//         maks = a[i];
//     }
// }

// console.log(maks);


// 3. Array-i tərs çevirin (built-in reverse() istifadə etmədən)
// Məsələn: [1, 2, 3, 4] → [4, 3, 2, 1]

// var a = [1, 2, 3, 4];
// var f = [];

// for(let i = a.length - 1; i >= 0; --i) {
//     f.push(a[i]);
// }

// console.log(f);

// 4. Array-də yalnız cüt ədədləri qaytar
// Məsələn: [1, 2, 3, 4, 5, 6] → [2, 4, 6]

// var a = [1, 2, 3, 4, 5, 6];
// var f = [];

// for(let i = 0; i < a.length; i++) {
//     if(a[i] % 2 === 0) {
//         f.push(a[i]);
//     }
//     else {
//         continue;
//     }
// }

// console.log(f);