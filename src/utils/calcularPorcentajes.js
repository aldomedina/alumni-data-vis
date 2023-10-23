export default function calcularPorcentajes(arr) {
  // Contar la frecuencia de cada palabra
  const frecuencia = {};
  arr.forEach((word) => {
    frecuencia[word] = (frecuencia[word] || 0) + 1;
  });

  // Calcular el total de palabras
  const totalPalabras = arr.length;

  // Crear un objeto con cada palabra y su porcentaje correspondiente
  const resultado = {};

  for (let palabra in frecuencia) {
    let porcentaje =
      ((frecuencia[palabra] / totalPalabras) * 100).toFixed(2) + "%";
    resultado[palabra] = porcentaje;
  }

  return resultado;
}
