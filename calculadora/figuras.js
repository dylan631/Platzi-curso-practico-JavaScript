//Código del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado ** 2;
}

const perimetroC = perimetroCuadrado(ladoCuadrado);
console.log("El perimetro del cuadrado es: " + perimetroC + "cm");

const areaC = areaCuadrado(ladoCuadrado);
console.log("El area del cuadrado es: " + areaC + "cm^2");
console.groupEnd();

//Código del triangulo
console.group("Triangulo");
const ladotriangulo1 = 6;
const ladotriangulo2 = 6;
const basetriangulo = 4;

console.log("Los lados del triangulo miden: " + ladotriangulo1 + "cm," + ladotriangulo2 + "cm," + basetriangulo + "cm");

const alturatriangulo = 5.5;

function perimetroTriangulo(lado1, lado2, lado3) {
    lado1N = Number(lado1);
    lado2N = Number(lado2);
    lado3N = Number(lado3);
    return (lado1N + lado2N + lado3N);
}

function areaTriangulo(base, altura) {
    areatriangulo = (base * altura) / 2;
    return areatriangulo;
}

const perimetroT = perimetroTriangulo(ladotriangulo1, ladotriangulo2, basetriangulo);
console.log("El perimetro del cuadrado es: " + perimetroT + "cm");

const areaT = areaTriangulo(basetriangulo, alturatriangulo);
console.log("Area triangulo: " + areaT + "cm^2");

console.groupEnd();

//Código del círculo
console.group("circulo");
//Radio
const radio = 4;
console.log("Radio: " + radio);

//Diametro
const diametro = radio * 2;
console.log("Diametro: " + diametro);

//PI
const PI = Math.PI;
console.log("Pi es: " + PI);

//circunferencia 
function perimetrocirculo(diam) {
    return 2 * diam * Math.PI;
}

function areacirculo(r) {
    return (r ** 2) * Math.PI;
}

const perimetroc = perimetrocirculo(diametro);
console.log("El perimetro del circulo es: " + perimetroc);

//Area
const areac = areacirculo(radio);
console.log("El area del circulo es: " + areac);

console.groupEnd();

//Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado"); //Esto trae el elemento de "input" del HTML
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro + " cm");
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = perimetroCuadrado(value);
    alert(area + " cm^2");
}

function calcularPerimetroTriangulo() {
    const input = document.getElementById("InputTriangulo1");
    const value1 = input.value;

    const input2 = document.getElementById("InputTriangulo2");
    const value2 = input2.value;

    const input3 = document.getElementById("InputTriangulo3");
    const value3 = input3.value;

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro + " cm");
}

function areaTriangulo(lado1, lado2, lado3) { //Funcion que se usará en la funcion calcularAreaTriangulo()
    lado1N = Number(lado1);
    lado2N = Number(lado2);
    lado3N = Number(lado3);
    s = (lado1N + lado2N + lado3N) / 2;
    area = Math.sqrt(s * (s - lado1) * (s - lado2) * (s - lado3));
    return area;
}

function calcularAreaTriangulo() {
    const input = document.getElementById("InputTriangulo1");
    const value1 = input.value;

    const input2 = document.getElementById("InputTriangulo2");
    const value2 = input2.value;

    const input3 = document.getElementById("InputTriangulo3");
    const value3 = input3.value;

    const area = areaTriangulo(value1, value2, value3);
    alert(area + " cm^2");

}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetrocirculo(value);
    alert(perimetro + " cm");
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areacirculo(value);
    alert(area + " cm^2");
}