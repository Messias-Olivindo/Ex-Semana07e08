//Valores
var velocidadeInicial = 100; //em m/s
var desaceleracao = 7; //em m/s^2
var tempoPouso; //em s
var velocidadeSegura = 5; //em m/s

//Descobrir o tempo para a alcançar a velocidade segura
tempoPouso = (velocidadeSegura - velocidadeInicial) / (- desaceleracao);

//Imprimir o resultado
console.log(`O tempo seguro para atinjir umas velocidade segura de pouso segundo os valores fornecidos é: ${tempoPouso} segundos`);
