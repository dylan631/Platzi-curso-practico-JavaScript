//Código del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado**2;
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

console.log("Los lados del triangulo miden: "+ladotriangulo1+"cm,"+ladotriangulo2+"cm,"+basetriangulo+"cm");

const alturatriangulo = 5.5;

function perimetroTriangulo(lado1,lado2,base){
    perimetrotriangulo = lado1+lado2+base;
    return perimetrotriangulo;
}

function areaTriangulo(base,altura){
    areatriangulo = (base*altura)/2;
    return areatriangulo;
}

const perimetroT = perimetroTriangulo(ladotriangulo1,ladotriangulo2,basetriangulo);
console.log("El perimetro del cuadrado es: " + perimetroT + "cm");

const areaT= areaTriangulo(basetriangulo,alturatriangulo);
console.log("Area triangulo: " + areaT+"cm^2");

console.groupEnd();

//Código del círculo
console.group("circulo");
//Radio
const radio = 4;
console.log("Radio: " + radio);

//Diametro
const diametro = radio*2;
console.log("Diametro: " + diametro);

//PI
const PI = Math.PI;
console.log("Pi es: " + PI);

//circunferencia 
function perimetrocirculo(dia,pi){
    return dia*pi;
}

function areacirculo(r,pi){
    return (r**2)*pi;
}

const perimetroc = perimetrocirculo(diametro,PI);
console.log("El perimetro del circulo es: "+ perimetroc);

//Area
const areac = areacirculo(radio,PI);
console.log("El area del circulo es: "+areac);

console.groupEnd();

//Aquí interactuamos con el HTML