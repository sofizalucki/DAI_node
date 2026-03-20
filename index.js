import { sumar, restar, multiplicar, dividir, areaCirculo, pi } from "./src/modules/matematica.js";
import Alumno from "./src/models/alumno.js";
import fs from 'fs';
import url from 'url';
import { countries, currencies } from 'country-data';

console.log("EJERCICIO 1");
const texto1 = "sofi";
const texto2 = "vicky";
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
console.log("\n\n");

console.log("EJERCICIO 4");
function copiar() {
    const origen = "./entrada.txt";
    const destino = "./salida.txt";
    fs.readFile(origen, 'utf-8', (err, contenido) => {
        if (err) {
            console.log("Error: Asegúrate de que 'entrada.txt' exista.");
            return;
        }
        fs.writeFile(destino, contenido, (err) => {
            if (err) {
                console.error("Error al escribir:", err);
                return;
            }
            console.log('El archivo fue copiado exitosamente');
        });
    });
}
copiar();
console.log("\n\n");

console.log("EJERCICIO 5");
function parsearUrl(direccion) {
    const miUrl = new URL(direccion);
    const params = Object.fromEntries(miUrl.searchParams);
    return {
        "host": `${miUrl.protocol}//${miUrl.host}`,
        "pathname": miUrl.pathname,
        "parametros": params
    };
}
let objeto = parsearUrl("https://campus.ort.edu.ar/secundaria/almagro/informatica/tp/2342788/tp-2-primera-practica-en-node");
console.log(objeto);
console.log("\n\n");

console.log("EJERCICIO 6");
function errorDeParseo(link) {
    try {
        return parsearUrl(link);
    } catch (error) {
        console.error(error);
    }
}
let textoMalo = errorDeParseo("JEJEJEJ");
console.log(textoMalo);
console.log("\n\n");

console.log("EJERCICIO 7");
function obtenerMoneda(pais) {
    if (!pais) return null;
    const input = pais.toString().trim();
    let countryEntry = null;
    if (input.length === 2) {
        countryEntry = countries[input.toUpperCase()];
    }
    if (!countryEntry) {
        countryEntry = Object.values(countries).find(c => c.name && c.name.toLowerCase() === input.toLowerCase());
    }
    if (!countryEntry) return null;
    const monedaCodigo = Array.isArray(countryEntry.currencies) ? countryEntry.currencies[0] : countryEntry.currencies;
    if (!monedaCodigo) return null;
    const monedaEntry = currencies.all.find(cur => cur.code === monedaCodigo || cur.code === monedaCodigo.toUpperCase());
    return monedaEntry ? monedaEntry.name : monedaCodigo;
}
console.log(obtenerMoneda('AR'));
console.log(obtenerMoneda('uruguay'));
console.log("\n\n");

console.log("GRACIAS :)");