/**
 * Dependencies
 */

const word = require('diceware-word')

/**
 * Generate passphrase made of diceware words (7 by default)
 *
 * @param {Number?} length
 * @param {Object?} dictionary
 * @param {Number?} entropy
 * @return {Array}
 * @api public
 */

module.exports = (length = 7, dictionary, entropy) => {
  const words = []
  while (length--) words.push(word(entropy, dictionary))
  return words
}
