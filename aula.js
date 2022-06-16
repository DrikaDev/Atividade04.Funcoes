function nomeDaFuncao(nome){
    console.log(nome);
}
nomeDaFuncao("Adriana"); // tem que chamar a função

//==========================

function fazerSoma (numero1, numero2){
    //console.log(numero1 + numero2);
    return numero1 + numero2;
}
console.log (fazerSoma (40,50));

//==========================

function areaDoQuadrado(lado){
    return lado * lado;
}

let resultado = areaDoQuadrado(10);
let resultado2 = areaDoQuadrado(35);
console.log("O valor da área do Quadrado é: ", resultado, "m²");
console.log("O valor da área do Quadrado é: ", resultado2, "m²");

//==========================

function areaDoCirculo(raio){
    let pi = Math.PI;
    return(raio ** 2)* pi;
}

let resultado3 = areaDoCirculo(300);
console.log("O resultado da área do círculo é " + resultado3)

//==========================

//criar uma função que exibe uma mensagem no console
function mensagem (){
    console.log ("Mostrando uma mensagem");
}
mensagem();

//criar uma função que recebe um nome como parâmetro e o exiba no console
function criandoNome(nome){
    return nome;
}
console.log (criandoNome("Adriana"));

//criar uma função que receba seu nome, profissão, e cidade como parâmetros e 
//exiba uma mensagem no console

function informacoes(nome, profissao, cidade){
    return `${nome}, ${profissao}, ${cidade}`
}
const dados = informacoes ("Adriana", "Estudante", "São Paulo")
console.log(dados);

//==========================

 