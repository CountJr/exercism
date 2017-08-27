class Pangram {
  constructor(text) {
    this.text = text.toLowerCase();
    this.charset = 'abcdefghijklmnopqrstuvwxyz';
  }

  isPangram() {
    return ![...this.text].reduce(this.removeChar, this.charset);
  }

  removeChar(acc,value) {
    const index = acc.indexOf(value);
    return index >= 0 ? `${acc.slice(0, index)}${acc.slice(index + 1)}` : acc;
  }
}

module.exports = Pangram;
