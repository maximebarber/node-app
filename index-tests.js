const { EventEmitter } = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('lunch', () => {
  console.log('yum 🍣')
})

eventEmitter.emit('lunch')
eventEmitter.emit('lunch')
eventEmitter.emit('lunch')

const { readFile } = require('fs').promises

/**
 * Returns the content of hello.txt
 */
async function hello() {
  const txt = await readFile('./hello.txt', 'utf8')
  return txt
}

process.on('exit', () => {
  console.log('On exit 🐳')
})

hello().then((res) => console.log(res))

console.log('do this ASAP')

/* readFile('./hello.txt', 'utf8', (err, txt) => {
  console.log(txt)
}) */

console.log('do this ASAP')

const myModule = require('./my-module')

console.log('myModule 🐱', myModule)
