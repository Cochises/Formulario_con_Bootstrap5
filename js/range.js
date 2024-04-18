// Obtén el elemento del rango y el span donde mostrarás el valor
const rangeInput = document.getElementById("customRange1");
const rangeSpan = document.getElementById("rangeSpan");

// SALARIO RANGE
const salaryRange = document.getElementById("salaryRange");
const salarySpan = document.getElementById("salarySpan");

// Mapea los valores del rango a intervalos salariales
const salaryIntervals = {
  0: "€0 - €12.000",
  1: "€12.000 - €16.000",
  2: "€16.000 - €21.000",
  3: "€21.000 - €28.000",
  4: "€28.000 - €35.000",
  5: "€35.000+",
};

// Configura el valor inicial del rango al cargar la página
salaryRange.value = 0;
const initialInterval = salaryIntervals[salaryRange.value];
salarySpan.textContent = initialInterval;

salaryRange.addEventListener("input", function () {
  const selectedInterval = salaryIntervals[salaryRange.value];
  salarySpan.textContent = selectedInterval;
  // Aquí podrías realizar acciones adicionales con el valor seleccionado.
});
