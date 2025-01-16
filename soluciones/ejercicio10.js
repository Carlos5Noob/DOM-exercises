function formulario() {

    let email = document.getElementById("email").value;
    let url = document.getElementById("url").value;

    let validaEmail= /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let validaurl = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;

    let resultado1 = document.getElementById("resultado1");
    let resultado2 = document.getElementById("resultado2");
    
    if(validaEmail.test(email)) {
        resultado1.innerHTML = "correcto";
    } else {
        resultado1.innerHTML = "incorrecto";
    }

    if(validaurl.test(url)) {
        resultado2.innerHTML = "correcto";
    } else {
        resultado2.innerHTML = "incorrecto";
    }

}


document.getElementById("confirmar").addEventListener("click", function(){

    formulario();

})