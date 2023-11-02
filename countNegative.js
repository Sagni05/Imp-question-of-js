//? count neg value
// let nums = [
//   [3, 2, 1, -1],
//   [5, 2, -1, -2, -5],
//   [7, 5, 3, -5],
//   [9, 4, -2, -4, -6],
// ];

// function countNegatives(arr) {
//   let countNeg = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       countNeg++;
//     }
//   }
//   return countNeg;
// }

// function aswajeet(nums) {
//   let count = 0;
//   nums.forEach((item) => {
//     count += countNegatives(item);
//   });
//   return count;
// }
// console.log(aswajeet(nums));

// let flateVal = nums.flat();
// console.log(flateVal);

//=======================================================

// let nums = [
//   [3, 2, 1, -1],
//   [5, 2, -1, -2, -5],
//   [7, 5, 3, -5],
//   [9, 4, -2, -4, -6],
// ];

// function addArrVal(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     count += arr[i];
//   }
//   return count;
// }

// let totalArrCount = nums.map((val) => addArrVal(val));

// console.log(totalArrCount);

// // out put = [5 , -1, 10, 1]
