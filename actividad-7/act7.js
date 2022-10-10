var numero = prompt("Introduce por favor un numero entero");
//var numero = 4.5;

// 5 x 5 = 25
//alert(numero % 1 == 0 ? "Correcto! El número es entero. Calculando su factorial...": "El numero es decimal. Por favor introduce un número entero");
if(numero % 1 == 0){
    let accumulator = 1
    alert("Correcto! El número es entero. Calculando su factorial...");
    for(let i = numero; i > 0; i--) {
        accumulator *= i 
    }
    alert(accumulator);
}
else {
    alert("El número es decimal, por favor introduce un número entero");
}

