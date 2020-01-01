const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];


switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(resolve => console.log('El Archivo ha sido creado!'))
            .catch(err => console.log(err));

    default:
        console.log('Comando no reconocido');
        break;
}