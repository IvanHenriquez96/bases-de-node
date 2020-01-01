//EXISTEN 3 TIPOS DE REQUIREDS
const fs = require('fs'); // este required es el comun donde requerimos una funcion de NODE
//const fs = require('express');// este required es para requerir archivos cargados via NPM
//const fs = require('./path');// este required es para requerir archivos hechos por nosotros

const colors = require('colors');



let listarTabla = (base, limite) => {

    for (let i = 1; i <= limite; i++) {
        if (i <= limite) {
            console.log(`${base} * ${i} = ${base * i}`.red);
        }


    }

}



let data = '';
let crearArchivo = async(base, limite = 10) => {

    if (!Number(base)) {
        reject('No es un numero');
        return;
    }

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i} \n`;
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        if (err) throw err;
        console.log('El Archivo ha sido creado!');
    });
}


module.exports = {
    crearArchivo: crearArchivo,
    listarTabla: listarTabla
}