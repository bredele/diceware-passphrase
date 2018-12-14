/**
 * Dependencies
 */

const word = require('diceware-word')

module.exports = (entropy = 7, dictionary) => {
  const words = []
  while (entropy--) words.push(word())
  return words
}
