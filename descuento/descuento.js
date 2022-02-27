const precioOriginal = 100;
const descuento = 15;


function calcularPrecioConDescuento(precio, descuento) {
    const porcentajeDescuento = 100 - descuento;
    const precioConDescuento = (precioOriginal * porcentajeDescuento) / 100;
    return precioConDescuento;
}

/*console.log({
    precioOriginal,
    descuento,
    porcentajeDescuento,
    precioConDescuento,
});*/

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value; //Se saca el valor que se obtuvo del inputPrice
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value; //Se saca el valor que se obtuvo del inputDiscount

    const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);

    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con descuento es: $"+precioConDescuento;

}
