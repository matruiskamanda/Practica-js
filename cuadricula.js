let cuadricula = "";

for (let y = 0; y <= 2; y++) {
  for (let x = 0; x <= 3; x++) {
    cuadricula += `(${x},${y}) `;
  }
  cuadricula = cuadricula.trim();
  cuadricula += "\n";
}
console.log(JSON.stringify(cuadricula));
