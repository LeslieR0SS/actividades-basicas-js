var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var DNI_num = prompt("Indique porfavor su DNI");
var DNI_letra = DNI_num.slice(-1).toUpperCase(); //pop funciona para arrays. Y el slice para stirngs

if(DNI_num < 0 || DNI_num > 99999999){
    alert("El numero proporcionado no es válido") && exit();
}

else{
    alert("El número introducido es válido. Calculando su letra...");
    var DNI_without_letter = DNI_num.slice(0, -1); // selecionamos solos los numeros del DNI introducido por la usuaria
    var resto = DNI_without_letter % 23;
    var resultado = letras[resto];
    alert(resultado); // la letra es la posición del array que ha dado como resultado el resto
    alert(DNI_letra == resultado ? "El número y la letra del DNI son correctos!" : "La letra que ha indicado no es correcta :/");
}

