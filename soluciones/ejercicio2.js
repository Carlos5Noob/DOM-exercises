function contarEnlaces() {

    console.log("Hay " + document.links.length + " enlaces");

}

function direccionEnlanza() {

    let enlaces = document.querySelectorAll("a");

    let penultimo = enlaces[enlaces.length-1];

    console.log(penultimo.href);

}

function numeroEnlazan() {

    let enlaces = document.querySelectorAll("a");
    contador = 0;
    for (let i = 0; i < enlaces.length; i++) {
        if (enlaces[i].href.includes("http://prueba")) {
            contador++;
        }
        
    }

    console.log("Hay " + contador + " enlaces que enlazan a http://prueba")

}

function contarEnlaces3parrafo() {
    let parrafo = document.querySelectorAll("p");

    let tercerParrafo = parrafo[2];

    console.log(tercerParrafo.childElementCount);

}

contarEnlaces() ;
direccionEnlanza();
numeroEnlazan();
contarEnlaces3parrafo();
