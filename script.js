// let array = [1,2,2,43,44,5,3,3,1,1,1,3,4,54,"4","1", "a", "b", "c" ] remove duplicates

let array = [
  1,
  2,
  2,
  43,
  44,
  5,
  3,
  3,
  1,
  1,
  1,
  3,
  4,
  54,
  "4",
  "1",
  "a",
  "b",
  "c",
];

// let orignal = new Set(array)

// console.log(orignal);

function Remove_Duplicate(arr) {
  //  console.log(arr)

  for (i = 0; i < arr.length; i++) {
    // console.log(arr[i]);

    for (j = i + 1; j < arr.length - 1; j++) {
      if (arr[i] > arr[j]) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
    }
  }

  let res = [];

  for (k = 0; k < arr.length; k++) {
    if (arr[k] != arr[k + 1]) {
      res.push(arr[k]);
    }
  }

  return res;
}

console.log(Remove_Duplicate(array));

//===========================================================================
