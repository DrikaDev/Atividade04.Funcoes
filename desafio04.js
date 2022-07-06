console.log("1 - crie uma função que exiba uma mensagem no console")
//ATIVANDO A FUNÇÃO SEM PASSAR UM PARAMETRO
function mensagemConsole(){
    console.log("Função que exibe mensagem no console.")
}
mensagemConsole()

//OU ATIVANDO A FUNÇÃO PASSANDO UM PARAMETRO
function mensagemConsole(mensagem){
console.log(mensagem)
}
mensagemConsole("Função que exibe mensagem no console.")

//========================

console.log ("2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console")
function receberNome (nome){
    console.log(`Olá, ${nome}!`)
}
receberNome ("Adriana")

//========================

console.log ("3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console")
function receberDados (nome, idade, estiloMusical){
    return `${nome}, ${idade}, ${estiloMusical}`
}
let dados = receberDados("Adriana ", 42+ " anos", "gosta de Zouk")
console.log(dados);

//========================

console.log ("4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console")
function receberDados2 (filme, musica){
    return `${filme}, ${musica}`
}
let dados2 = receberDados2 ("Uma linda mulher", "Pretty Woman")
console.log(dados2);

//========================

console.log("5 - crie uma função que retorne o triplo do número recebido no parâmetro da função")
function multiplicar (x){
    return x * 3;
}
let x = multiplicar (3)
console.log (multiplicar(13));

//=========================
