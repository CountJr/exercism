class simpleCipher {
  constructor(key) {
    this.charset = 'abcdefghijklmnopqrstuvwxyz';
    if(this.isKeyNotValid(key)) {
      throw new Error('Bad key');
    }
    this.key = key || this.generateKey(100);
  }

  encode(text) {
    return [...text].map((v,i) => this.encodeChar(v,this.key[i])).join('');
  }

  decode(text) {
    return [...text].map((v,i) => this.decodeChar(v,this.key[i])).join('');
  }

  isKeyNotValid(key) {
    return typeof key !=='undefined' && !key.match(/[a-z]+/);
  }

  generateKey(length) {
    return [...Array(length)].map(() => this.generateRandomChar()).join('');
  }

  generateRandomChar() {
    return this.charset[Math.floor(Math.random() * this.charset.length)]
  }

  encodeChar(textChar, keyChar) {
    return this.charset[(this.charset.indexOf(textChar) + this.charset.indexOf(keyChar)) % this.charset.length];
  }

  decodeChar(textChar, keyChar) {
    return this.charset[(this.charset.indexOf(textChar) + this.charset.length - this.charset.indexOf(keyChar)) % this.charset.length];
  }
}



module.exports = simpleCipher