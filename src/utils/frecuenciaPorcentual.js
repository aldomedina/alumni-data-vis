export default function frecuenciaPorcentual(arr, targetString) {
  // Contar la aparición del targetString en el array
  let count = arr.filter((word) => word === targetString).length;

  // Calcular el porcentaje
  let porcentaje = (count / arr.length) * 100;

  return porcentaje.toFixed(2) + "%";
}
