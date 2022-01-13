/*Compara dos numeros*/ 

let valor1 = parseInt(prompt("Ingrese un numero por favor:"));

let valor2 = parseInt(prompt("Ingrese otro numero por favor:"));


if (valor1 > valor2 ) {
    alert("El número ingresado:  " + valor1 + " es mayor al número ingresado: " + valor2 );
}else if (valor1 == valor2) {
    alert("El número ingresado:  " + valor1 + " es igual al número ingresado: " + valor2 );
}else{
    alert("El número ingresado:  " + valor1 + " es menor al número ingresado: " + valor2 );
}

