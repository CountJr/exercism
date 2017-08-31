class PrimeFactors {
  constructor() {
    //
  }

  static for(num) {
    const iter = (currentNum, currentPrime, acc) => {
      if (currentNum < 2) {
        return acc;
      }
      return !(currentNum % currentPrime)
        ? iter(currentNum / currentPrime, currentPrime, [...acc, currentPrime])
        : iter(currentNum, currentPrime + 1 , acc)
    };
  return iter(num, 2, []);
  }
}

module.exports = PrimeFactors;