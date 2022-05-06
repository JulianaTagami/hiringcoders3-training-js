//estrutura de Repetição
var numeroSorteado = 10;
var tabuada = 7;
for(var i = 0; i <= 10; i++) { //para variavel i igual a 0, enquanto i menor que 100, incremento i++ contando um a cada vez que o laço for executado
  console.log("Valor de " + tabuada + "x" + i + " = " + tabuada * i);
}
for (var i = 0; i < 100; i++){
    if (numeroSorteado === i) {
        console.log("seu numero foi encontrado");
    }
}
// estrutura de repetição While
var achou = false;
var tabuada
while (!achou) {  //essa exclamação irá inverter o valor booleano, ou seja irá ser falso agora ao invés de true, dessa forma ele entrará no laço
    console.log("achou");
    break; //coloquei o break para parar senão irá ficar em looping no laço
}
