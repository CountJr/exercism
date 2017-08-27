class pangram {
  constructor(text) {
    this.text = text;
  }
  isPangram() {
    const re = /([a-z])(?!.*\1)/g;
    return (this.text.toLowerCase().match(re) || []).length === 26;
  }
}



module.exports = pangram;
