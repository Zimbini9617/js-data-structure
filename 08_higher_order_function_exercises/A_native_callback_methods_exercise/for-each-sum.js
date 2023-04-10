function forEachSum(arr) {
    let sum = 0;
    arr.forEach(num => {
      sum += num;
    });
    return sum;
  }
  console.log(forEachSum([10, 3, 5])); // 18
  console.log(forEachSum([-6, 7, 9, 4])); // 14
  console.log(forEachSum([])); // 0
    