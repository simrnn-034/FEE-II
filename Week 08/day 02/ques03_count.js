function countEvenNumbers(arr) {
  let count = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      count++;
    }
  }
  return count;
}

console.log(countEvenNumbers([1, 2, 3, 4, 6, 7])); 
