// Missing Numbers
// Link: https://leetcode.com/problems/missing-number/?envType=problem-list-v2&envId=array

// var missingNumber = function(nums) {
//     nums.sort((a, b) => a - b);
//     for(let i = 0; i <= nums.length; i++) {
//         if(nums[i] === i) {
//             continue;
//         }
//         else {
//             return i;
//             break;
//         }
//     }
// };

//Single Number
// Link: https://leetcode.com/problems/single-number/submissions/1725547037/?envType=problem-list-v2&envId=array

// var singleNumber = function (nums) {
//     const mySet = new Set();
//     var sumOne = 0;
//     var sumSet = 0;
//     for (let i = 0; i < nums.length; i++) {
//         sumOne += nums[i];
//         mySet.add(nums[i]);
//     }
//     mySet.forEach(number => {
//         sumSet += number;
//     });
//     return 2*sumSet - sumOne;
// };

//Move Zeros
// Link: https://leetcode.com/problems/move-zeroes/submissions/1725530613/?envType=problem-list-v2&envId=array

// function moveZeroes(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 0) {
//             nums.push(nums[i]);
//             const k = nums.indexOf(nums[i]);
//             if (k !== -1) {
//                 nums.splice(k, 1);
//             }
//         }
//         else {
//             continue;
//         }
//     }
// };