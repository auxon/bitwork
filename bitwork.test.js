const bitwork = require('bitwork')
const bit = new bitwork({ rpc: { user: "root", pass: "nfhRO+3[" } })
describe('bitwork operations', () => {
  bit.on("ready", () => {
    // YOUR LOGIC
    console.log('bitwork ready')
  }),
  bit.on("error", (err) => {
    console.log('bitwork error', err)
  }),
  bit.on("block", (block) => {
    console.log('bitwork block', block)
  }),
  bit.on("tx", (tx) => {
    console.log('bitwork tx', tx)
  })});