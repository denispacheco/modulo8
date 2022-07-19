//1.- cargar las librerias
const express= require("express");
const hbs=require("hbs");

//2.configurar librerias
//express
const app= new express();
//establecer la carpeta publica que será visible por el usuario
// (para cargar contenido como fotos, css, etc..)
app.use(express.static("public"));
//aqui le indicamos a express que use hbs para las vistas
app.set("view engine","hbs");
//crear una carpeta llamada views y establecer la ruta en express:
app.set("views",__dirname+"/views");
//configuracion de partials
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

const datosPagina1={
    titulo:"Hola desde partials!",
    subtitulo:"Hola desde javascript!"
}
app.get('/', (req, res) => {
  res.render('vistaClase3_1',datosPagina1)
})

const datos=["pan","mantequilla","mermelada","cecina"];

app.get('/partial2', (req, res) => {
    res.render('vistaClase3_2',{lista:datos})
  })

app.listen(3000);