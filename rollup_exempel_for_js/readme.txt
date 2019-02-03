/* Objetivo: poder dividir la programacion de scripts (.js) */




/* En este caso desde el archivo main.js ( que es nuestro archivo principal de ejecucio) queremos poder llamar o usar otros archivos
de javascript .js. Asi organizamos mejor el codigo */ 
/* Nota: para poder consultar el valor una variable directamente 
desde main.js deberemos declarar esta como this. variable en el archivo donde se aloja ( por un tema de scope)*/

// Primero, instalamos rollup desde consola.
//
$ npm install --global rollup
//
// Segundo comprobamos que esta instalado invocando a la ayuda
//
$ rollup --help
//
//Usamos esta instruccion para generar bundle.js que llamaremos desde <script> en html.
//
$ rollup main.js --file bundle.js --format iife
