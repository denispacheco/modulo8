//1.- cargar las librerias
const express= require("express");
const hbs=require("hbs");
const {Pool}=require("pg");
require('dotenv').config();

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

//pg
const configuracion={
    user: process.env.PGUSER,
    host:process.env.PGHOST,
    database:process.env.PGDATABASE,
    password:process.env.PGPASSWORD
}
const pool=new Pool(configuracion);

const port = 3000
app.get('/', async (req, res) => {
    const query='SELECT l."Nombre" as "Libro",a."Nombre" AS "Nombre",l."Edicion",l."Paginas"   FROM "Libros" l  JOIN "Autores" a ON l."IdAutor"=a."Id"'
    const datos=await pool.query(query);
    const datosVista={libros:datos.rows}
    res.render("ejercicio1.hbs",datosVista);
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))