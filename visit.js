// Contador de visitas
/*
$(document).ready(function() {
    var contador = 0;

    // Incrementa el contador cada vez que se ve la página
    $(window).on('load', function() {
      contador++;
      $('#contador').html(contador);
    });

  });
*/

// Obtiene el elemento del contador
var counterElement = document.getElementById('counter');

// Obtiene el valor actual del contador almacenado en el almacenamiento local
var counterValue = localStorage.getItem('counterValue');

// Verifica si el valor del contador existe en el almacenamiento local
if (counterValue) {
  // Si existe, incrementa el valor del contador en 1
  counterValue = parseInt(counterValue) + 1;
} else {
  // Si no existe, establece el valor del contador en 1
  counterValue = 1;
}

// Actualiza el valor del contador en el elemento HTML
counterElement.textContent = counterValue;

// Almacena el nuevo valor del contador en el almacenamiento local
localStorage.setItem('counterValue', counterValue.toString());

