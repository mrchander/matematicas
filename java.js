function mostrarEjemplo(ejemplo) {
    alert(ejemplo);
  }

  function verificarRespuesta(element, esCorrecta) {
    // Restaurar el color de todas las opciones
    var opciones = element.parentNode.getElementsByTagName("li");
    for (var i = 0; i < opciones.length; i++) {
      opciones[i].classList.remove("correct", "incorrect");
    }

    // Colorear la opción seleccionada
    if (esCorrecta) {
      element.classList.add("correct");
    } else {
      element.classList.add("incorrect");
    }
  }

  document.getElementById('reiniciarBtn').addEventListener('click', function() {
    // Recargar la página
    location.reload();
  });


/* */

let respuestasSeleccionadas = Array.from({ length: 25 }, () => null);
let calificacion = 0;

function reiniciar() {
  respuestasSeleccionadas = Array.from({ length: 25 }, () => null);
  calificacion = 0;
  mostrarPregunta(1);
  document.getElementById('calificacion').style.display = 'none';
  document.getElementById('reiniciarBtn').style.display = 'none';
}

function verificarRespuesta(element, esCorrecta, numeroPregunta) {
  const index = numeroPregunta - 1;

  if (respuestasSeleccionadas[index] !== null) {
    // El usuario ya seleccionó una respuesta, no hacer nada
    return;
  }

  respuestasSeleccionadas[index] = esCorrecta;

  if (esCorrecta) {
    calificacion += 1;
    element.style.backgroundColor = 'green';
  } else {
    element.style.backgroundColor = 'red';
  }

  // Verificar si todas las preguntas fueron respondidas
  if (respuestasSeleccionadas.every((respuesta) => respuesta !== null)) {
    mostrarCalificacion();
  } else {
    mostrarPregunta(numeroPregunta + 1);
  }
}

function mostrarCalificacion() {
  const puntuacionFinal = (calificacion / 25) * 10;
  document.getElementById('puntuacion').innerText = puntuacionFinal.toFixed(2);
  document.getElementById('calificacion').style.display = 'block';
  document.getElementById('reiniciarBtn').style.display = 'block';
}

mostrarPregunta(1);