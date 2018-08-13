const express = require('express');//paquete en modulos de node
const app = express();//variable que es el producto de la funcion de express, nos permite usar express como deseemos. 
const hbs = require('hbs');
require('./hbs/helpers');

const port =  process.env.PORT || 3000;//porcess es variable del objeto global, si corriendo localmente no existe del doy la opcio o 3000

app.use(express.static(__dirname + '/public')); //aqui especificamos cual es el folder que queremos servir que sea estatico y publico. 
//Express  HBS engine

hbs.registerPartials(__dirname + '/views/parciales');//con el dirname le digo no importa cual path tengas tomalo y concatenale la siguiente ruta 
//con lo anterior le digo a hbs o handlebars que ya tengo una carpeta que contiene mis parciales. 
app.set('view engine', 'hbs');



//ESTO ES UN PAT EL GET CON SU RENDER 
app.get('/',  (req, res) => {//estamos configurando una solicitud get cuando el path sea un slash , solicitud y respuesta 
 
res.render('home', {
nombre: 'MAAcco',

});//intermanmente la funcion send va detectar qeu es un objeto y lo va a serializar en un formato json. 
     
 });

 app.get('/about',  (req, res) => {//estamos configurando una solicitud get cuando el path sea un slash , solicitud y respuesta 
  
res.render('about');//intermanmente la funcion send va detectar qeu es un objeto y lo va a serializar en un formato json. 
     
 
 });
 
app.listen(port, () => {

 console.log(`Escuchando peticiones al puerto ${port}`);

});       //este listen tambien recibe un callback         