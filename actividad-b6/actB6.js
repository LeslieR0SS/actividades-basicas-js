var horasSemanales = parseFloat(prompt("Introduce las horas totales que has hecho esta semana:"));
var horasExtras = parseFloat(prompt("Introduce las horas extras realizadas"));

function calculateSalary (){
    var salario = (horasSemanales * 10) + (horasExtras * 15);
    alert("Tu salario es: " + salario + "€")
}

calculateSalary();