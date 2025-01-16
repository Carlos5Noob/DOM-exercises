function calcula() {
    let comentario = document.getElementById("comentarios").value.length;
    let maximo = parseInt(document.getElementById("comentarios").getAttribute("maxlength"));

    let resultado = maximo - comentario;

    document.getElementById("resultado").innerHTML = resultado;
}

document.getElementById("comentarios").addEventListener("input", calcula);