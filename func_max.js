const maximo = (arr) => {
  let max = null;
  for (let i = 0; i < arr.length; i++) {
    if (max === null || arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log(maximo([3, 9, 2, 7]));
console.log(maximo([-5, -1, -8]));
console.log(maximo([4]));
console.log(maximo([]));

/*
Predicciones 
-[3, 9, 2, 7]
arr[0] = 3 / max = null | max = 3
arr[1] = 9 / max = 3    | max = 9
arr[2] = 2 / max = 9    | max = 9
arr[3] = 7 / max = 9    | max = 9

- [-5, -1, -8]
arr[0] = -5 / max = null | max = -5
arr[1] = -1 / max = -5 | max = -1
arr[2] = -8 / max = -1 | max = -1

-[4]
arr[0] = 4 /max = null | max = 4

-[]
max = null
*/
