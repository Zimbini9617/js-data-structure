function pickPrimes(numbers) {
    return numbers.filter(isPrime);
  }
  
  function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  console.log(pickPrimes([12, 3, 7, 18, 11]));
  console.log(pickPrimes([17, 23, 9, 42])); 
  console.log(pickPrimes([4, 2048, 100, 55])); 
    