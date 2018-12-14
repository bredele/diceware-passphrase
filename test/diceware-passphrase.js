/**
 * Dependencies
 */

const test = require('tape')
const passphrase = require('..')
const list = Object.values(require('diceware-list/list.json'))

test('should generate a 7 words passphrase', assert => {
  assert.plan(8)
  const words = passphrase()
  assert.equal(words.length, 7)
  words.map(word => {
    assert.equal(list.indexOf(word) > -1, true)
  })
})
