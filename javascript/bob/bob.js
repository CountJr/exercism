class Bob {
  constructor() {
    //
  }

  hey(text) {
    if(text.trim() === '') {
      return 'Fine. Be that way!'
    }
    if(text.trim().match(/[A-Z]+/) && !text.trim().match(/[a-z]+/)) {
      return 'Whoa, chill out!';
    }
    if(text.trim().slice(-1) === '?') {
      return 'Sure.';
    }
    return 'Whatever.';
  }
}

module.exports = Bob;