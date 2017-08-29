class Gigasecond {
  constructor(date) {
    this.birthDate = Date.parse(date);
  }

  date() {
    return new Date(new Date(this.birthDate + 1e12));
  }
}

module.exports = Gigasecond;