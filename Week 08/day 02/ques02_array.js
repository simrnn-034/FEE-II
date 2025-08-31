function getFirstElement(arr) {
  return arr[0];
}

let arr1 = prompt("Enter numbers separated by commas:").split(",").map(Number);
console.log("First element: " + getFirstElement(arr1));