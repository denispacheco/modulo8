//1.- cargar las librerias
const express= require("express");
//2.configurar librerias
//express
const app= new express();
//establecer la carpeta publica que será visible por el usuario
// (para cargar contenido como fotos, css, etc..)
app.use(express.static("public"));
//aqui le indicamos a express que use hbs para las vistas
app.set("view engine","ejs");
//crear una carpeta llamada views y establecer la ruta en express:
app.set("views",__dirname+"/views");



//-----------------------------------------
//datos que se pasaran a la vista
const datos={
    texto:"hoy es martes",
    precio:499,
    alimentos:["pan","mantequilla","mermelada","cecina"],
    subtitulo:"mensaje enviado desde js"
}
//carga de la vista cuando se visita la ruta inicial
app.get('/', (req, res) => {
  res.render('ejemplo_ejs',datos)
})
//-----------------------------------------












//const datos=["pan","mantequilla","mermelada","cecina"];

app.get('/partial2', (req, res) => {
    res.render('',{lista:datos})
  })

app.listen(3000);
