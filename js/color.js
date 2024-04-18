// Obtenemos los elementos
const selectorColor = document.getElementById("selectorDeColor");
const colorSeleccionadoSpan = document.getElementById("colorSeleccionado");

// Asignamos un evento
selectorColor.addEventListener("input", () => {
  const colorSeleccionado = selectorColor.value;
  colorSeleccionadoSpan.textContent = colorSeleccionado;
})