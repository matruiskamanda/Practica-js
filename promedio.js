const sumar = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

const promedio = (arr) => {
  // se retorna null para que la persona pueda distinguir si la lista viene vacia sin datos a 0
  // quien la use debe revisar el resultado antes de hacer cuentas con el
  if (arr.length === 0) {
    return null;
  }
  let total = sumar(arr);
  let resultado = total / arr.length;
  return resultado;
};

/*
-Case 1 [2, 4, 6]
Predicción 
total = 12
promedio = 12/3 = 4

-Case 2 [5]
total = 5
promedio = 5/1 = 5

-Case 3 [1,2]
total = 3
promedio = 3/2 = 1.5

-Case 4 []
promedio = Null
*/
console.log(promedio([2, 4, 6]));
console.log(promedio([5]));
console.log(promedio([1, 2]));
console.log(promedio([]));
