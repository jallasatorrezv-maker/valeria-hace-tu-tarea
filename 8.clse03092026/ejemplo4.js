const productos={
    "cuchara":45,
    "tenedor":30,
    "cuchillo":50,

}
let nombrebuscado=prompt("ingrese el nombre del producto que desea buscar:");
let cantidad=parseInt(prompt("ingrese la cantidad que desea comprar:"));
if(productos[nombrebuscado]){
    let total=productos[nombrebuscado]*cantidad;
    alert("el total a pagar es:"+total);
} else {
    alert("producto no encontrado");
}