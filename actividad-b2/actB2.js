var peso = parseFloat(prompt("Introduce por favor tu peso en kg"));
var altura = parseFloat(prompt("Introduce por favor su altura en cm"));


function calculateBMI(){
    let alturaMetros= altura/100;
    let imc = peso / Math.pow(alturaMetros,2); //math.pow(base, exponente) sirve para calcular exponenciales. 
    alert(imc);
    switch(true){//siempre entra
        case imc<18:
            alert("Peso bajo. necesario valorear signos de desnutrición");
            break;
        case imc<24.9:
            alert("Normal");
            break;
        case imc<26.9:
            alert("Sobrepeso");
            break;
        case imc<29.9:
            alert("Obesidad grado I. Riesgo relativo alto para desarrollar enfermedades cardiovasculares");
            break;
        case imc<39.9:
            alert("Obesidad grado II. Riesgo relativo muy alto para el desarrollo de enfermedades cardiovasculares");
            break;
        case imc>=40:
            alert("Obesidad grado III Extrema o Mórbida. Riesgo relativo extremadamente alto para el desarrollo de enfermedades cardiovasculares");
            break;
    }
}

calculateBMI();