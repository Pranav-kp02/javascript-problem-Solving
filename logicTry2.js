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
console.log(checkTriagle(5, 4, 3));
