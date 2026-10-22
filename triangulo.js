let triangulo = "";

for (let fila = 1; fila <= 4; fila++) {
  for (let asteriscos = 1; asteriscos <= fila; asteriscos++) {
    triangulo += "*";
  }
  triangulo += "\n";
}
triangulo = triangulo.trim();

console.log(triangulo);
console.log(JSON.stringify(triangulo));

/*
Prediccion
*
**
***
****
*/
