//funções
function somar(operadorA, operadorB) { //o parenteses são os termos dessa "soma"
    var resultadoC = operadorA + operadorB;
    return resultadoC;
}
function olaJuliana(x) {
    console.log("olá, sabia que voltaria " + x);
}
var resultadoDaSoma = somar(1, 2);
var resultadoNovoDaSoma = somar(14, 6);
console.log(resultadoDaSoma);
console.log(resultadoNovoDaSoma);
olaJuliana('Juliana');