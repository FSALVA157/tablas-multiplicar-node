const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar');

const argv = require('./config/yargs').argv;
const colors = require('colors/safe');


switch (argv._[0]) {
    case 'listar':

        listarArchivo(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(resp => {
            console.log('Archivo creado:', colors.red(resp));
        }).catch(err => console.log(err));
        break;

    default:
        console.log('comando no reconocido');
        break;
}






// let argv2 = process.argv;


// console.log('limite:', argv.limite);