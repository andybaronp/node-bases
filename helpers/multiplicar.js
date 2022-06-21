import {writeFileSync} from 'fs'
import colors from 'colors'


const crearArchivo = async (base = 1, l = false, h = 10) => {
  try {
    const nombre = `tabla-${base}.txt`
    let salida = ''
    let clg = ''

    for (let multiple = 1; multiple <= h; multiple++) {
      salida += ` ${base} x ${multiple}  = ${base * multiple} \n`

      clg += ` ${base} x ${colors.bold.italic.magenta(multiple)}  = ${
        base * multiple
      } \n`
    }

    writeFileSync(`./salida/${nombre}`, salida)
    if (l) {
      console.log('============='.bgBlue.bold)
      console.log('Tabla de: '.cyan, base)
      console.log('============='.bgBlue.bold)
      console.log(clg)
    }

    return nombre
  } catch (err) {
    throw err
  }
}
export default crearArchivo
