var operador = 100; //variavel tem nome e um valor atribuido
var operando = 50;
var resultado = operador * operador;

console.log(resultado); //quem você quer imprimir no teste
var nome = "Juliana";
var sobrenome = "Tagami";
var nomeCompleto = nome + " " + sobrenome;

console.log(nomeCompleto);
var primeiroValor = 10;
var segundoValor = "3";
var soma = primeiroValor + segundoValor;

console.log(soma);
var name = "Juliana";
if (name === "Juliana") { //condição se, === representa igual
    console.log("Legal! Seu nome é este mesmo")
} else if(name === "Tagami") { //senão, se ... imprima...
    console.log("esse é seu sobrenome")
}else { //senao imprima ...
    console.log("esse não é seu nome")
}
//mesmo exercicio de cima usando o switch
switch(name) {
    case "Juliana":
        console.log("legal! é você mesmo");
        break;
    case "Fulano":
        console.log("não é você");
        break;
    default: //se nenhum desses casos acima for satisfeito ele cairá em default
        console.log("Achei que era você, abestado");
        break; //sempre usar o break no switch e não em outros casos
}
