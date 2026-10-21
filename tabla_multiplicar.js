let result = "";

for (let y = 1; y <= 5; y++) {
  for (let x = 1; x <= 5; x++) {
    result += `${x * y} `;
  }
  result = result.trim();
  result += "\n";
}
result = result.trim();
console.log(result);
console.log(JSON.stringify(result));
