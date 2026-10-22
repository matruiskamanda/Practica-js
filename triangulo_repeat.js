let data = "";

for (let l = 1; l <= 4; l++) {
  data += "*".repeat(l);
  data += `\n`;
}
data = data.trim();
console.log(data);
console.log(JSON.stringify(data));

//predicción
/*
 *
 **
 ***
 ****
 */
