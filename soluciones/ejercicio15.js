let enlaces = document.getElementsByTagName("a");

for (let i = 0; i < enlaces.length; i++) {

    enlaces[i].href = "https://www.prueba.com"
    
}

let parrafos = document.getElementsByTagName("p");

for (let i = 0; i < parrafos.length; i++) {
    if (parrafos[i].classList.contains("importante")) {
        parrafos[i].classList.replace("importante", "resaltado");
    } else {
        parrafos[i].classList.add("normal");
    }
}

let contador = 1;

for (let i = 0; i < enlaces.length; i++) {
    if (enlaces[i].classList.contains("importante")) {
        enlaces[i].setAttribute("name", "importante" + contador);
        contador++;
    }
}