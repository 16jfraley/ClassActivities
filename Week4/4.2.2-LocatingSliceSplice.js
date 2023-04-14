const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
arr.indexOf('a');
arr.indexOf('b');
arr.indexOf('c');

// find the last index of "a", "b", and "c"
arr.lastIndexOf('a');
arr.lastIndexOf('b');
arr.lastIndexOf('c');

// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"

function removeDuplicate (array, duplicateValue) {
  let firstIndex =array.indexOf(duplicateValue)
  let lastIndex = array.lastIndexOf(duplicateValue)
  while(firstIndex !== lastIndex){
    array.splice(lastIndex, 1);
    lastIndex = array.lastIndexOf(duplicateValue)
  };
  return array;
};

console.log(removeDuplicate(arr, "a"));
console.log(removeDuplicate(arr, "b"));
console.log(removeDuplicate(arr, "c"));
