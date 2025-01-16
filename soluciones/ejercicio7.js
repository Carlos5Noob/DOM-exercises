function calcular() {
    let valor1 = parseInt(document.getElementById("valor1").value);
    let valor2 = parseInt(document.getElementById("valor2").value);

    let suma = document.getElementById("suma");
    let resta = document.getElementById("resta");

    let resultado = document.getElementById("resultado");


    if (suma.checked == true) {
        
        resultado.innerHTML = "La suma entre " + valor1 + " y " + valor2 + " es " + (valor1+valor2);
        
    }

    if (resta.checked == true) {
        
        resultado.innerHTML = "La resta entre " + valor1 + " y " + valor2 + " es " + (valor1-valor2);
        
    }

    if (resta.checked == true && suma.checked == true) {
        
        resultado.innerHTML = "La suma entre " + valor1 + " y " + valor2 + " es " + (valor1+valor2) + " y " + "la resta entre " + valor1 + " y " + valor2 + " es " + (valor1-valor2);
        
    }



}

document.getElementById("calculo").addEventListener("click", function(){
    calcular();
})