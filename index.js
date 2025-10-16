import fs from "fs"
let texto = ""
let orden = [71, 1, 2, 116, 3, 84, 4, 5, 81, 74, 6, 7, 8, 93, 68, 9, 104, 10, 65, 11, 136];
for (let i=0; i<orden.length; i++){
texto = fs.readFileSync("Cuento/parte" + orden[i] + ".txt","utf-8") + "\n";
fs.appendFileSync("cuento.txt",texto);
}
