
function sumar(){
    alert("La funcion sumar funciona");

    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let resultado =num1+num2;
    alert("El resultado de la suma es:" + resultado);
    let mostrar=document.getElementById("resultado");
    mostrar.innerHTML="Suma=" + resultado;
}

/** este es una matriz de 5x7
 * * * * * * *
 * * * * * * *
 * * * * * * *
 * * * * * * *
 * * * * * * *
 */
function sumar(){
    alert("La funcion sumar funciona");

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    
    
    let resultado = num1 + num2;
    alert("El resultado de la suma es:" + resultado);

    let asteriscos = "";
    for (let i = 0; i < num1; i++) {
        for (let j = 0; j < num2; j++) {
            asteriscos = "* ";
        }
        asteriscos += "<br>";
    }

    
    let mostrar = document.getElementById("resultado");
    mostrar.innerHTML = "Suma = " + resultado + "<br><br>" + asteriscos;
}