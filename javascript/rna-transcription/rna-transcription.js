//

const convertTable = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
};

const rnaTranscription = function(dna) {
};

rnaTranscription.prototype.convert = function (dnaSymbol) {
  if (!convertTable[dnaSymbol])
    throw new Error('Invalid input');
  return convertTable[dnaSymbol];
}

rnaTranscription.prototype.toRna = function(dna) {
    return [...dna].map(this.convert).join('');
};

module.exports = rnaTranscription;