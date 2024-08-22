function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPrecioDescuento(){

    const inputPrecio = document.getElementById("InputPrecio").value;

    const inputDescuento = document.getElementById("InputDescuento").value;

    const precioConDescuento = calcularPrecioConDescuento(inputPrecio, inputDescuento);

    document.getElementById("ResultadoP").innerText = "Precio con descuento: $" + precioConDescuento;
    
}

function limpiarDatos(){

    document.getElementById("InputPrecio").value = "";
    document.getElementById("InputDescuento").value = "";
    document.getElementById("ResultadoP").innerText = "";

}
