// try 3

// 2

const hashTagGen = (str) => {
  str = str.split(" ");
  let word = str.map((ele) => ele.replace(ele[0], ele[0].toUpperCase()));
  console.log("#" + word.join(""));
};
// hashTagGen("hello world");

// 5

const sortArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let save = arr[i];
        arr[i] = arr[j];
        arr[j] = save;
      }
    }
  }
  console.log(arr);
};

// sortArray([5, 3, 1, 8]);

// 12

const findDuplicate = (arr) => {
  console.log([...new Set(arr)]);
};
// findDuplicate([1, 2, 2, 3, 3, 3, 4]);

// 17

const camelcaseCon = (arr) => {
  arr = arr.split(" ");
  let word = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      word.push(arr[i].toLowerCase());
    } else {
      let cap = arr[i].charAt(0).toUpperCase();
      let rest = cap + arr[i].slice(1);
      word.push(rest);
    }
  }
  console.log(word.join(""));
};
// camelcaseCon("hello world mern");

// 23

const repitationCheck = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] += 1;
    }
  }
  console.log(obj);

  let mode = 0;
  for (let key in obj) {
    if (obj[key] > mode) {
      mode = key;
      // console.log(obj[key], key, mode);
    }
  }
  console.log(mode);
};

// repitationCheck([1, 2, 2, 3, 3, 1, 2, 4]);

let arry1 = [1, 2, 2, 3, 3, 4];

const dup = (arr) => {
  console.log(...new Set(arr));
};

dup(arry1);
