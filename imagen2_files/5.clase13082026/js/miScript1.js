
a=5
b=6
if(b%2==0)
{
    console.log(b,"es numero par");
}
if(a%2==0)
{
console.log(a,"es numero par");
}
else
    {
    
    console.log(a,"es  numero impar");
}
/** Realizar un programa para sumar los primeros 10 numeros
 * Ejemplo:0+1+2+3+4+5+6+7+8+9=45
 */
  
let suma = 0; // <--- ESTE ES EL ACUMULADOR

for (let i = 0; i < 10; i++) {
    suma = suma + i; // Se le va sumando cada valor de 'i'
}

console.log("El total acumulado es:", suma);



let cantidad = parseInt(prompt("¿Cuántos numeros pares quieres ver?"));

for (let i = 1; i <= cantidad; i++) {
    console.log(i * 2);
}