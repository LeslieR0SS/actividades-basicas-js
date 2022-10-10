var valores = [true, 5, false, "hola", "adios", 2];
var textElements = [];

for(const texto of valores){
    if(typeof texto === "string"){
        textElements.push(texto)
    }
}

var texto1 = textElements[0];
for(let i = 0; i < textElements.length; i++){
    if(texto1.length<textElements[i + 1]){
        texto1 = textElements[i +1]
    }
    else{
        alert(texto1)

    }

}