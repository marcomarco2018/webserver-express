const hbs = require('hbs');


//helpers
hbs.registerHelper('getAnio', () => {

    return new Date().getFullYear();
  
  })
  
  hbs.registerHelper('capitalizar', (texto) => {
  
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
  
      palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();//slice(1) todo lo que vennga despues de la primera posicion. 
    });
    return palabras.join(' ');
  })