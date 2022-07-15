//importar el módulo
//import completo
//const saludo=require("./saludo");
//saludo.hola();
//saludo.chao();
//import parcial
const {hola,usuario, auto,pi}=require("./saludo.cjs");
hola();
//chao(); no funcionará
console.log(usuario);
const miAuto=new auto("BK9876");
console.log(miAuto);

console.log(2*pi*5);
//------------------------------------------------------
//export directo
const {sumar,resta,punto}=require("./calculo");

console.log(sumar(3,6));
var p1=new punto(4,5);
console.log(p1);



