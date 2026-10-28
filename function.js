function sumarPares(arr) {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      suma += arr[i];
    }
  }
  return suma;
}

console.log(sumarPares([1, 2, 3, 4, 5, 6]));
/*
Prediccion
2
4
6
-> 12
*/

console.log(sumarPares([]));
//prediccion 0

console.log(sumarPares([7, 9]));
//prediccion 0
