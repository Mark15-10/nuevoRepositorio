import { Persona } from './clases.js';


var miPersona = new Persona()
var parrafoMetodo = document.getElementById('metodo')
var parrafo  = document.getElementById('persona');
parrafo.innerText = miPersona.nombre + ' ' + miPersona.apellido;
parrafoMetodo.innerText = miPersona.correr();

parrafoMetodo.innerText+= miPersona.mostrarEstado();