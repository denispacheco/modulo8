//nuestro primer módulo
const pi=3.14;
function hola(){
    console.log("hola!!!");
}
function chao(){
    console.log("chao!!!");
}
const usuario={
    nombre:"denis",
    apellido:"pacheco"
}
class auto{
    constructor(patente){
        this.patente=patente;
    }
}

module.exports={hola,chao,usuario,auto,pi}

