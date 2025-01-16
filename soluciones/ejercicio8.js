function calcular() {
    let valor1 = parseInt(document.getElementById("valor1").value);
    let valor2 = parseInt(document.getElementById("valor2").value);

    let operacion = document.getElementById("operacion").value;

    let resultado1 = document.getElementById("resultado1");



    if (operacion == "suma") {
        
        resultado1.innerHTML = "La suma entre " + valor1 + " y " + valor2 + " es " + (valor1+valor2);
        
    }

    if (operacion == "resta") {
        
        resultado1.innerHTML = "La resta entre " + valor1 + " y " + valor2 + " es " + (valor1-valor2);
        
    }

}

function calcular2() {
    let valor1 = parseInt(document.getElementById("valor1").value);
    let valor2 = parseInt(document.getElementById("valor2").value);

    let operaciones = document.getElementById("operaciones").value;


    let resultado2 = document.getElementById("resultado2");


    if (operaciones == "suma") {
        
        resultado2.innerHTML = "La suma entre " + valor1 + " y " + valor2 + " es " + (valor1+valor2);
        
    }

    if (operaciones == "resta") {
        
        resultado2.innerHTML = "La resta entre " + valor1 + " y " + valor2 + " es " + (valor1-valor2);
        
    }

}

document.getElementById("calculo").addEventListener("click", function(){
    calcular();
})

document.getElementById("calculomultiple").addEventListener("click", function(){
    calcular2();
})