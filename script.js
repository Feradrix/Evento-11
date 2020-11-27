function validarRespuestas() {

    var total = 8;
    var puntos = 0;

    //Obtener entradas del usuario

    var trivia = document.forms["trivia"];
    var respuestas = ["c", "b", "a", "c", "b", "c", "d", "b"];

    //verificar respuestas

    for (var i = 1; i <= total; i++) {

        if (trivia["p" + i].value == null || trivia["p" + i].value == "") {
            alert("Por favor responda la pregunta " + i);
            return false;

        } else {
            if (trivia["p" + i].value === respuestas[i - 1]) {
                puntos++;
            }
        }
    }


    //mostrar resultados

    document.getElementById("modal").style.display = "flex";

    var resultado = document.getElementById("resultado");

    resultado.innerHTML = '<h3>¡Obtuviste <span>' + puntos + '</span> de <span>' + total + ' puntos!</span></h3>';

    return false;
}

function cerrar() {

    document.getElementById("modal").style.display = "none";
    location.href = location.href;
    return false
}