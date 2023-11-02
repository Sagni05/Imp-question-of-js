// let c =9;
// let d= 10

// const increment = ()=>{
//     return (c + d);
// }

// console.log(increment());

//==========================================================

//* curring sum(2)(3)(4) => 9

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// // let add = sum(2)(3)(4);

// console.log(sum(2)(3)(4));

//===================================================================================
// ? 👉 find  elem whisch is equal to the target after sum

//  const arr = [2, 11, 6, 3];

// let target = 9;

// function targetEqual(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     const num1 = arr[i];
//     for (let j = i + 1; j < arr.length; j++) {
//       const num2 = arr[j];
//       if (num1 + num2 === target) {
//         return [num1, num2];
//       }
//     }
//   }
//   return null;
// }

// const value = targetEqual(arr, target);
// console.log(value);

//===================================================================================
// ? 👉 Reverse each words

// const str = "my name is shubham agnihotri";

// let reverse = str.split("").reverse().join("");
// console.log(reverse);

// let reverseWord = reverse.split(" ").reverse().join(" ");

// console.log(reverseWord);

//===================================================================================
//? 👉 count Fruits without reapting fruits name

// let fruits = [
//   { Apple: 4, Orange: 7, Grapes: 3 },
//   { Orange: 6, Lemon: 9, Mango: 7 },
//   { Pineapple: 7, Banana: 5, Mango: 7 },
// ];

// const countedFruites = {};

// fruits.forEach((elem) => {
//   //   console.log("elem", elem);
//   for (each in elem) {
//     // console.log(75, elem[each]);
//     // console.log(76, each);
//     if (countedFruites[each]) {
//       countedFruites[each] = countedFruites[each] + elem[each];
//     } else {
//       countedFruites[each] = elem[each];
//     }
//   }
// });

// console.log(countedFruites);

//===================================================================================
//* 👉 replace all "dog" from "monkey"

// const p =
//   "Their is a Brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";

// let rejex = /Dog/gi;      // i = ignore, g = global

// console.log(p.replace(rejex, "Monkey"));

//===================================================================================
//* 👉 UpperCase, LowerCase, Trime method

// let name = "    Shubham Agnihotri    ";

// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.trim()); // remove starting and ending space
// console.log(name.trimStart()); // remove starting space
// console.log(name.trimEnd()); // remove ending space

//============================================================================================

//  *apple and banana and payaya and guava and water melon and green apple
// ? 👉 output = [{word : "apple and",index : [0,1,2,3,4,5,6,7]},...n]
