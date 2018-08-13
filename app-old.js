const http = require ('http'); //no hicimos npm install de esto porque ya viene en el propio node. 
//para pder escuchar peticiones http primero vamos a crear el servidor 
http.createServer ((req, res,)=> {

res.writeHead(200, {'Content-Type': 'application/json'});//aqui especifice que es una appliation json

    let salida = {

        nombre: 'marco',
        edad: 32, 
        url: req.url //es el lusgar que solicita el usuario 
    }

res.write(JSON.stringify(salida));
res.end();

})
.listen(8080);

    console.log('Escuchando el puerto 8080');