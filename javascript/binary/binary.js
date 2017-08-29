class Binary {
  constructor(binNum) {
    this.number = this.validate(binNum);
  }

  toDecimal() {
    return this.number
      ? [...this.number].reverse().reduce((a,v,i) => a + v * Math.pow(2, i), 0)
      : 0;
  }

  validate(binNum) {
    return !!binNum.match(/^[01]+$/) ? binNum : 0;
  }
}

module.exports = Binary;