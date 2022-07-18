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
//3.- crear una vista .hbs, en la carpeta views
//4.- crear un server con el método get
//5.- envia en la respues, el archivo hbs junto con la variable que la plantilla necesita
let valor=300;
//custom helper
hbs.registerHelper("imagen",function(options){
    return "<img src='"+options.fn(this)+"'>";
})

app.get('/', (req, res) => {
    const datos={
        titulo:"mi primer render HBS!!!!",
        html:"<p>Hola que tal</p><br/><a href='http://www.google.cl'>link a google</a>",
        escribir:1,
        esCaro:valor>500,
        frutas:["piña","manzana","pera","plátano"],
        autos:{
            mazda:"KJ7654",
            ford:"IJRE65",
            mitsubishi:"PO7654",
            lada:"PKIU87",
            chevrolet:"UY6543"
        },
        foto:"img/foto.webp"

    }
    res.render("vista1",datos);
  
})

app.listen(3000,()=>{
    console.log("escuchando en puerto 3000");
})