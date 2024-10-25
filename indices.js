// Contador - Indices

function empezarContador(elemento, valorFinal) {
    var valorActual = 0;
    var intervalo = setInterval(function() {
    if (valorActual >= valorFinal) {
        clearInterval(intervalo);
    } else {
        valorActual++;
        elemento.textContent = valorActual;
    }
    }, 10);
}
var seccionClientes = document.getElementById('clientes');
var seccionVentas = document.getElementById('ventas');
var seccionSatisfaccion = document.getElementById('calidad');
var seccionMonto = document.getElementById('ingresos');

window.addEventListener('load', function() {
    var alturaViewport = window.innerHeight;
    var scrollActual = window.scrollY;
    if (scrollActual > seccionClientes.offsetTop - alturaViewport) {
    empezarContador(seccionClientes, 60); // Cambia el valor final según tus necesidades
    }
    if (scrollActual > seccionVentas.offsetTop - alturaViewport) {
    empezarContador(seccionVentas, 72); // Cambia el valor final según tus necesidades
    }
    if (scrollActual > seccionSatisfaccion.offsetTop - alturaViewport) {
    empezarContador(seccionSatisfaccion, 93); // Cambia el valor final según tus necesidades
    }
    if (scrollActual > seccionMonto.offsetTop - alturaViewport) {
    empezarContador(seccionMonto, 2628000); // Cambia el valor final según tus necesidades
    }
});
