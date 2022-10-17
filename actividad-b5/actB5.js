var ciencias = parseFloat(prompt("Introduce tu nota de Ciencias"));
var historia = parseFloat(prompt("Introduce tu nota de Historia"));
var matematicas = parseFloat(prompt("Introduce tu nota de Matemáticas"));
var educacion = parseFloat(prompt("Introduce tu nota de Educación"));

function getGrade (){
    var grade = (ciencias + historia + matematicas + educacion)/4;
    alert("Tu nota final es: " + grade);
}

getGrade();