function pickPerfectSquares(numbers) {
    return numbers.filter(number => {
      const root = Math.sqrt(number);
      return root % 1 === 0;
    });
  }
  console.log(pickPerfectSquares([6, 4, 81, 21, 36])); // [4, 81, 36]
  console.log(pickPerfectSquares([100, 24, 144])); // [100, 144]
  console.log(pickPerfectSquares([30, 25])); // [25]
    