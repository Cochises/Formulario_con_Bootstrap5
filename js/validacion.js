// Validaciones por defecto en Bootstrap 5

// Ejemplo de JavaScript de inicio para deshabilitar el envío de formularios si hay campos no válidos
(() => {
  "use strict";

  // Obtener todos los formularios a los que queremos aplicar estilos de validación personalizados de Bootstrap
  const forms = document.querySelectorAll(".needs-validation");

  // Hacer un bucle sobre ellos y evitar la sumisión
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

document.addEventListener("DOMContentLoaded", function () {
  // Obtener el formulario
  var form = document.querySelector(".needs-validation");

  // Agregar un evento al botón de enviar
  form.addEventListener(
    "submit",
    function (event) {
      // Verificar la validación del formulario
      if (!form.checkValidity()) {
        // Evitar que el formulario se envíe si no es válido
        event.preventDefault();
        // Obtener todos los campos de entrada dentro del formulario
        var inputFields = form.querySelectorAll("input, select, textarea");
        // Iterar sobre los campos para encontrar el primer campo no válido
        for (var i = 0; i < inputFields.length; i++) {
          if (!inputFields[i].validity.valid) {
            // Enfocar el primer campo no válido
            inputFields[i].focus();
            break; // Detener el bucle después de enfocar el primer campo no válido
          }
        }
      }
    },
    false
  );
});

// Validar contraseña
function validatePassword() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("password-repeticion").value;
  var mismatchError = document.getElementById("passwordMismatch");

  if (password !== confirmPassword) {
    mismatchError.style.display = "block";
  } else {
    mismatchError.style.display = "none";
  }
}

// Función para limitar la longitud del campo de entrada a 5 caracteres
function limitarLongitudNumeroVia(input) {
  if (input.value.length > 5) {
    input.value = input.value.slice(0, 5);
  }
}

// Función para limitar la longitud del campo de entrada a 5 caracteres
function limitarLongitudCodigoPostal(input) {
  if (input.value.length > 5) {
    input.value = input.value.slice(0, 5);
  }
}

// Función para validar el DNI / NIE
function validarDocumentacion(input) {
  let numeroDocumentacion = input.value;

  // Si la longitud no es 8, muestra un mensaje de error
  if (numeroDocumentacion.length !== 8) {
    document.getElementById("documentacionError").style.display = "block";
    input.setCustomValidity("Escribe tu DNI con exactamente 8 dígitos");
  } else {
    // Si el valor es mayor a 99999999, establece el valor en 99999999
    if (parseInt(numeroDocumentacion) > 99999999) {
      input.value = 99999999;
    }

    document.getElementById("documentacionError").style.display = "none";
    input.setCustomValidity("");
  }
}
