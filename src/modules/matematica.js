const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;
const pi = 3.1416;
function areaCirculo(radio)
{
    const area = (radio*radio)*pi;
    return area;
}
export { sumar, restar, multiplicar, dividir, areaCirculo, pi };