let precioCosto = parseFloat (prompt("Ingrese el precio del costo del parlante"));

while (true){
    if (!isNaN(precioCosto) && precioCosto != null &&
    precioCosto !="") {
        break;
    } else{
        alert("no es un numero")
    }
    continue;
}
//SALIDA
precioCostoM = precioCosto.toFixed(2)
alert("El Costo del parlante es: " + precioCostoM);
console.log("El Costo del parlante es: " +precioCostoM);
document.write ("<h2>El costo del parlante es: "+precioCostoM+"</h2>")

// SUMAR EL IVA AL PRODUCTO
function CalcularIva(precioCosto){
    return (precioCosto * 0.21);
}

let iva = CalcularIva(precioCosto);
ivaM = iva.toFixed(2);

alert("El IVA del parlante es: " + ivaM);
console.log("El IVA del parlante es: " +ivaM);
document.write ("<h2>El IVA del parlante es: "+ ivaM +"</h2>");

// SUMAR COSTO + IVA

function sumarIva(precioCosto){
    return (precioCosto + precioCosto * 0.21);
}

let precioConIva = sumarIva (precioCosto);
precioConIvaM = precioCostoIva.toFixed(2);

alert("El parlante con IVA es: " + precioConIvaM);
console.log("El parlante con IVA es: " + precioConIvaM);
document.write ("<h2>El parlante con IVA es: " + 
precioConIvaM + "</h2>");