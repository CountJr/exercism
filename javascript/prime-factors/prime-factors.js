class PrimeFactors {
  constructor() {
    //
  }

  static for(num) {
    let primes = [];
    let currentPrime = 2;
    let currentNum = num;
    while (currentNum) {
      if (currentNum < 2) {
        return primes;
      }
      if(!(currentNum % currentPrime)) {
        currentNum /= currentPrime;
        primes.push(currentPrime);
      } else {
        currentPrime += 1;
      }
    }
  }
}


module.exports = PrimeFactors;