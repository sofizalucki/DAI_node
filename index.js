import { sumar, restar, multiplicar, dividir, areaCirculo, pi } from "./src/modules/matematica.js";
import Alumno from "./src/models/alumno.js";

console.log("EJERCICIO 1");
const texto1= "sofi";
const texto2= "vicky";
console.log(texto1);
console.log(texto2);
console.log(texto1 + " y " + texto2 + " BFFS 4EVER");
console.log("\n\n");

console.log("EJERCICIO 2");
console.log("5+3=" + sumar(9, 3));
console.log("5-3=" + restar(9, 3));
console.log("5-3=" + multiplicar(9, 3));
console.log("5-3=" + dividir(9, 3));
console.log("Si un circulo tiene 4cm de radio, su area es " + areaCirculo(4) + " cm2");
console.log("\n\n");

console.log("EJERCICIO 3");
const Sofi = new Alumno("sofizalucki", "48860305");
const Valu = new Alumno("valuelter", "48855001");
console.log("Username: @" + Sofi.username);
console.log("DNI: " + Sofi.DNI);
console.log("Username: @" + Valu.username);
console.log("DNI: " + Valu.DNI);