alert("si funciona");
);function Multiplicar(a,b){
    let b=parseInt(prompt("ingrese  un numero:"));
    let num1 =a;
    let a=parseInt(prompt("ingrese  un numero:"));
    let num2 =b;
    if(num1<0){ 
        num1=num1;}
        if(num2<0){
        num2=num2;
    }
    let suma=0;
    for(let i=0;i<num2;i++){
        suma=suma+num1;
    }
    if((a<0 && b>0 ||(a>0 && b<0))){
        suma=-suma;
    }
console.log("El resultado de tu multiplicacion es:",suma);}
