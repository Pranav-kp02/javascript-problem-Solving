// // JavaScript Coding Challenges try2 🔥

// 2

const hashTagGen = (str) => {
  str = str.split(" ");
  str = str.map((curr) => curr.replace(curr[0], curr[0].toUpperCase()));
  console.log("#" + str.join(""));
};

// hashTagGen("hello world");

// 5

const sortArray = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let ref = arr[i];
        arr[i] = arr[j];
        arr[j] = ref;
      }
      console.log(arr[i]);
    }
  }
  return arr;
};

// console.log(sortArray([5, 3, 10, 8]));

const checkTriagle = (s1, s2, s3) => {
  if (s1 === s2 && s2 === s3) {
    return "equilateral";
  } else if (s1 !== s2 && s2 !== s3 && s1 !== s3) {
    return "scalene";
  } else {
    return "issolateal";
  }
};
// console.log(checkTriagle(5, 4, 3));

// 12

const duplicateCheck = (arr) => {
  console.log(...new Set(arr));
};

const duplicateCheck2 = (arr) =>
  arr.filter((value, index, self) => self.indexOf(value) === index);

// console.log(duplicateCheck2([1, 2, 3, 2, 1, 4]));

// 17

const camelCaseConveter = (str) => {
  str = str.split(" ");
  console.log(str);

  let val = str.map((curr, index) => {
    if (index === 0) {
      return curr.toLowerCase();
    } else {
      return curr.charAt(0).toUpperCase() + curr.slice(1).toLowerCase();
    }
  });
  console.log(val.join(""));
};

// camelCaseConveter("hello world");

// 23

// const arr = [1, 2, 2, 3, 1, 4, 2];
// let count = {};

// for (let ele of arr) {
//   count[ele] = (count[ele] || 0) + 1;
// }

// console.log(count);

// 24

const modeFinder = (arr) => {
  let count = {};
  for (let ele of arr) {
    count[ele] = (count[ele] || 0) + 1;
  }

  let big = 0;
  let key = "";

  for (let ele of arr) {
    if (count[ele] > big) {
      big = count[ele];
      key = ele;
    }
    console.log(key, big);
  }
  console.log(key);
};

// modeFinder([1, 2, 2, 3, 1, 4, 3, 3, 3, 2]);

// 25

const factorial = (num) => {
  let res = 1;
  for (let i = 1; i <= num; i++) {
    res = res * i;
  }
  // console.log(res);
};

// factorial(5);

const factorial2 = (num) => {
  if (num === 1) {
    return 1;
  } else {
    console.log(num);

    return num * factorial2(num - 1);
  }
};

// console.log(factorial2(5));

// 26

const fibonachiSeries = (num) => {
  if (num <= 1) {
    return num;
  } else {
    console.log(num);

    return fibonachiSeries(num - 1) + fibonachiSeries(num - 2);
  }
};

// console.log(fibonachiSeries(4));

// 29

const numberRange = (num1, num2, arr = []) => {
  if (num1 <= num2) {
    arr.push(num1);
    return numberRange(num1 + 1, num2, arr);
  }
  return arr;
};
// console.log(numberRange(0, 5));

// 33

const randomHexGen = () => {
  let gen = Math.random().toString(16).slice(2, 8);
  console.log("#" + gen);
};

// randomHexGen();

// 34

const removeDuplicet = (arr) => {
  console.log(...new Set(arr));
};
removeDuplicet([1, 2, 2, 3, 4, 4, 5]);
