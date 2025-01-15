function calcula() {

    let comentario = parseInt(document.getElementById("comentarios").value.length);

    let maximo = parseInt(document.getElementById("comentarios").value.max);


    let resultado = document.getElementById("resultado").innerHTML = (maximo-comentario);

}