const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors')

console.clear()
crearArchivo(argv.b, argv.l, argv.h)
  .then((nom) => console.log('\ncreado'.green, nom.red.underline))
  .catch((err) => console.log(err))
