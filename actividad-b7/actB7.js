function randomBetween(min, max) {  
    return Math.random() * (max - min) + min 
    //Math.random() -> escoje un numero al azar. 
    // Lo que ponemos después del * es para indicar el rango. Por ejemplo si ponemos 10, el numero al azar seria del 0 al 10.
    // Pero en este caso ponemos un rango variable. Y para calcular el rango de cualquier limite  que nos pasen, por eso restamos el Max - Min
    // Finalmente le sumamos a ese calculo el mínimo oara desplazar el numeoro aleatorio obtenido por el ordenador para que se encuentre dentro del rango deseamos
}

var randomNumber = randomBetween(1, 50).toFixed(); //to.FIxed() sirve para redondear.
console.log(randomNumber);

alert("El número aleatorio es: " + randomNumber); 