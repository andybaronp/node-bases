import  crearArchivo  from './helpers/multiplicar.js'
import argv from './config/yargs.js'
import colors from 'colors'

console.clear()
crearArchivo(argv.b, argv.l, argv.h)
  .then((nom) => console.log('\ncreado'.green, nom.red.underline))
  .catch((err) => console.log(err))
 