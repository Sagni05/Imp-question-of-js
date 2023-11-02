// ? 👉 Delete element from array

// let arr = [20, 565, 23, 89, 23, 3, 65, 954, 10];
// let position = 5;

// for (let i = position; i < arr.length; i++) {
//   arr[i] = arr[i + 1];
// }
// arr.length = arr.length - 1;

// console.log(arr);

//==================================================================================
// ? 👉 Search element from array

// let arr = [20, 565, 23, 89, 23, 3, 65, 954, 10];
// let element = 65;
// index = undefined;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === element) {
//     index = i;
//     break;
//   }
// }

// console.log(index);

//==================================================================================
// ? 👉 Insert element in array

// let arr = [20, 565, 23, 89, 23, 3, 65, 954, 10];
// let newItem = 70;
// let position = 5;

// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
//   if (i >= position) {
//     arr[i + 1] = arr[i];
//   }
//   if (i == position) {
//     arr[i] = newItem;
//   }
// }

// console.log(arr);

//==================================================================================
// ? 👉 find the LCM of two num

// let lcmOfNum = (num1, num2) => {
//   let output;
//   for (let i = 0; i <= num1 && i <= num2; i++) {
//     if (num1 % i == 0 && num2 % i == 0) {
//       output = i;
//     }
//   }
//   console.log(output, 58);
//   let LCM = (num1 * num2) / output;

//   console.log(LCM);
// };

// lcmOfNum(12, 10);

//==================================================================================
// ? 👉 name push in same country

let obj = {
    anil: "india",
    vijay: "india",
    jay: "USA",
    veer: "india",
    shekhar: "USA",
};

let output = {};

for (let key in obj) {
    let value = obj[key];
    if (output[value]) {
        output[value].push(key);
    } else {
        output[value] = [key];
    }

    console.log(obj[key]);
}

console.log(output);
