const REACTIONS = [
  {say: 'Fine. Be that way!', pred: (text) => text.trim() === ''},
  {say: 'Whoa, chill out!', pred: (text) => text.trim().match(/[A-Z]+/) && !text.trim().match(/[a-z]+/)},
  {say: 'Sure.', pred: (text) => text.trim().slice(-1) === '?'},
  {say: 'Whatever.', pred: () => true},
];


class Bob {
  constructor() {
    //
  }

  hey(text) {
    return REACTIONS.reduce((a,v) => {
      const newMessage = v.pred(text) ? v.say : a;
      return a ? a : newMessage;
    }, '')
  }
}

module.exports = Bob;