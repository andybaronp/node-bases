const argv = require('yargs')
  .option('b', {
    alias: 'base',
    demandOption: true,
    describe: 'Tabla de mumeros',
    type: 'number',
  })
  .option('l', {
    alias: 'listar',
    describe: 'Lista en consola la lista',
    demandOption: false,
    default: false,
    type: 'boolean',
  })
  .option('h', {
    alias: 'hasta',
    describe: 'El límited de cálculo de la tabla',
    demandOption: false,
    default: 10,

    type: 'number',
  })
  .check((argv) => {
    if (isNaN(argv.b)) {
      throw 'La base debe ser un número'
    }
    if (argv.h < 1) {
      throw 'Debe ingresar un número mayor '
    }
    if (isNaN(argv.h)) {
      throw 'El límited debe ser un número'
    }
    return true
  }).argv

module.exports = argv
