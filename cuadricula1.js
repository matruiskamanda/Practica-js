let cuadricula = "";
for (let y = 0; y <= 2; y++) {
  for (let x = 0; x <= 3; x++) {
    cuadricula = cuadricula.concat(`(${x}, ${y})`);
  }
  cuadricula = cuadricula.concat("\n");
}

console.log(JSON.stringify(cuadricula));
