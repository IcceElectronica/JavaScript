//primero colocamos el encabezado, mediante el uso de un selector de busqueda
var encabezado = document.querySelector('h1');
encabezado.textContent = 'Control de inventarios al 9 de diciembre 2020';

//Actualizamos los precios
let precioporcajaCC3Lretornable = 166.5;
let precioCC3Lretornable = precioporcajaCC3Lretornable/6;
let precioporcaja1uncuartovidrio = 127.31;
let precioCC1Luncuarto = precioporcaja1uncuartovidrio/8;

//Declaracion de las variables para la Cocacola 3 litros retornable
let CC3L = document.querySelector('#CC3L');
let minimodeCC3L = document.querySelector('#minimodeCC3L');
let comprarCC3L = document.querySelector('#comprarCC3L');
let inversion = document.querySelector('#inversion');
let porinvertir = document.querySelector('#porinvertir');
let gananciapasada = document.querySelector('#gananciapasada');
let gananciaactual = document.querySelector('#gananciaactual');

//Declaracion de las variables para la Cocacola litro un cuarto vidrio
let CC114L = document.querySelector('#CC114L');
let hayCC114L = document.querySelector('#hayCC114L');
let minimodeCC114L = document.querySelector('#minimodeCC114L');
let comprarCC114L = document.querySelector('#comprarCC114L');
let inversionCC114L = document.querySelector('#inversionCC114L');
let porinvertirCC114L = document.querySelector('#porinvertirCC114L');
let gananciapasadaCC114L = document.querySelector('#gananciapasadaCC114L');
let gananciaactualCC114L = document.querySelector('#gananciaactualCC114L');

//Declaracion de las variables para los totales
var totalinvertido = document.querySelector('#t21');
var totalporinvertir = document.querySelector('#t22');

//Realización de las consultas de datos existentes en el HTML
document.querySelector('h1').onclick = function() {
        alert('¿hola como estas?, Esta pagina actualiza los inventarios y nos da sugerencias de compra. Y para ello debes actualizar los datos de las casillas de existencias. Tomando en cuenta que las ganancias mensuales son un indicador para nuestra toma de decisiones.');
    }
    
//Implementación de las funciones que realizaran la actualización de datos
CC3L.addEventListener('click', actualiza);
function actualiza() {
    let name = prompt('¿Cuantas botellas de CC3LR hay? Sin revasar el minimo sugerido.');
    CC3L.textContent = Number(name);
    comprarCC3L.textContent = 12 - name ;
    inversion.textContent =  (Math.round(Number(precioCC3Lretornable * name )));
    porinvertir.textContent = (Math.round(Number( precioCC3Lretornable * comprarCC3L.textContent )));
    totalinvertido.textContent = '$'+ (Math.round(Number(inversion.textContent) + Number(inversionCC114L.textContent)));
    totalporinvertir.textContent = '$'+ (Math.round(Number(porinvertir.textContent) + Number(porinvertirCC114L.textContent)));
      }

   CC114L.addEventListener('click', actualizando);
function actualizando() {
    let name2 = prompt('¿Cuantas botellas de CC1,1/4 hay? Sin revasar el minimo sugerido.');
    CC114L.textContent = Number(name2);
    comprarCC114L.textContent = 16 - name2 ;
    inversionCC114L.textContent =  (Math.round(Number(precioCC1Luncuarto * name2 )));
    porinvertirCC114L.textContent = (Math.round(Number(precioCC1Luncuarto * comprarCC114L.textContent )));
    totalinvertido.textContent = '$'+ (Math.round(Number(inversion.textContent) + Number(inversionCC114L.textContent)));
    totalporinvertir.textContent = '$'+ (Math.round(Number(porinvertir.textContent) + Number(porinvertirCC114L.textContent)));
      }

   t21.addEventListener('click', actuar);
function actuar() {
    totalinvertido.textContent = '$'+ (Math.round(Number(inversion.textContent) + Number(inversionCC114L.textContent)));
    }
    t22.addEventListener('click', actuar2);
function actuar2() {
     totalporinvertir.textContent = '$'+ (Math.round(Number(porinvertir.textContent) + Number(porinvertirCC114L.textContent)));
      }


