// 7. Array-də təkrarlanan elementləri silin
// Məsələn: [1, 2, 2, 3, 4, 4, 5] → [1, 2, 3, 4, 5]

// function findUniqueElements(arr) {
//     const mySet = new Set();
//     for(let i = 0; i < arr.length; i++) {
//         mySet.add(arr[i]);
//     }
//     return mySet;
// }

// var arr = [1, 2, 2, 3, 4, 4, 5];
// console.log(findUniqueElements(arr));

// 8. İki array-in ümumi elementlərini tapın
// Məsələn: [1, 2, 3] və [2, 3, 4] → [2, 3]

// function findSameElements(arr1, arr2) {
//     var arr3 = [];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if(arr1[i] === arr2[j]) {
//                 arr3.push(arr1[i]);
//             }
//             else {
//                 continue;
//             }
//         }
//     }
//     return arr3;
// }

// var arr1 = [2, 3, 4, 5, 10];
// var arr2 = [2, 4, 7, 8, 10];

// console.log(findSameElements(arr1, arr2));

// 9. Array elementlərini cüt və tək olaraq qruplaşdır
// Məsələn: [1, 2, 3, 4, 5] → {even: [2, 4], odd: [1, 3, 5]}

// function groupElements(arr) {
//     var evenArr = [];
//     var oddArr = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] % 2 === 0) {
//             evenArr.push(arr[i]);
//         }
//         else {
//             oddArr.push(arr[i]);
//         }
//     }
//     return `odd: ${oddArr}; even: ${evenArr}`;
// }
// var arr = [1, 2, 3, 4, 5];
// console.log(groupElements(arr));

// 10. N uzunluqda Fibonacci array yaradın
// Məsələn: n=6 → [0, 1, 1, 2, 3, 5]

// function fibonacciNums(n) {
//     if (n <= 0) return [];
//     if (n == 1) return [0];
//     var fib = [0, 1];
//     for (let i = 0; i < n-2; i++) {
//         fib.push(fib[i] + fib[i + 1]);
//     }
//     return fib;
// }
// var n = 6;
// console.log(fibonacciNums(n));