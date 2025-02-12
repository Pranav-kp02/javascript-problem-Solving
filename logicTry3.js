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
findDuplicate([1, 2, 2, 3, 3, 3, 4]);
