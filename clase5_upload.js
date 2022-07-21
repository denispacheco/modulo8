//1.- cargar las librerias
const express = require('express')
const upload=require("express-fileupload");//carga de libreria para obtener archivos
const moment=require("moment"); //para la fecha
const path=require("path"); //para la obtener extension

//2.- configurar express
const app = express()
const port = 3000
app.use(express.static("public"));
const opcionesUpload={
    limits:{
        filesize: 1024*1024*10 //10 megas
        }
}
app.use(upload(opcionesUpload));//inicializacion de libreria de archivos para que express la use 
app.set("view engine","ejs");
app.set("views",__dirname+"/views");

//3.- generar los request y las ruas
app.get('/', function(req, res) {
    res.render("upload");
});

app.get('/multi', function(req, res) {
    res.render("multiupload");
});

//5.- crear post con la ruta para obtener los archivos del formulario
app.post("/enviar_archivo",function(req,res){    
    //chequeo de si viene o no un archivo
    if(!req.files){
        return res.status(400).send("archivo no encontrado");
    }

    let archivo=req.files.archivo;    
    let fecha=moment().format("YYYY_MM_DD_HH_mm_ss_SSS");
    let ruta=__dirname+"/uploads/"+fecha+"_"+archivo.name;
    archivo.mv(ruta,function(err){
        if(err){
            console.log("Error al guardar archivo:"+ err.message);
            res.status(500).send("error al guardar archivo");
        }else{
            res.send("Archivo guardado correctamente");
        }
    })    
})
//multiple
app.post("/enviar_archivos",function(req,res){    
    //chequeo de si viene o no un archivo
    if(!req.files){
        return res.status(400).send("archivo no encontrado");
    }
    //console.log(req.files);
    if(Object.keys(req.files).length!=3){
        return res.status(400).send("faltan archivos");
    }
    //revisar que el archivo llamado imagen sólo tenga archivos 
    //de tipo foto
    var extensiones=[".jpg",".png",".webp",".gif"];
    let extension= path.extname(req.files.imagen.name);

    if (!extensiones.includes(extension)){
        return res.status(400).send("archivo no válido");
    }
    res.send("OK");

})

//multiple post
app.post("/enviar_multiarchivos",function(req,res){
    //console.log(req.files.archivo);

    if(Array.isArray(req.files.archivo)){ //arreglo
        for(i=0;i<req.files.archivo.length;i++){
            console.log(req.files.archivo[i].name);
        }
    }else{ //objeto
        console.log(req.files.archivo.name);
    }

    res.send("OK");
})


//4.- inicar el server
app.listen(port, () => console.log(`Example app listening on port ${port}!`))