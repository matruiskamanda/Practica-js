let cuadricula = "";

for (let y = 0; y <= 4; y++) {
  for (let x = 0; x <= 4; x++) {
    cuadricula += `(${x},${y}) `;
  }
  cuadricula = cuadricula.trim();
  cuadricula += `\n`;
}

console.log(cuadricula);
console.log(JSON.stringify(cuadricula));
