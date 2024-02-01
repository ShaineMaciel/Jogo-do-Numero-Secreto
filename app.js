let listaDeNumerosSorteados =[];
let numeroLimite = 10;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Número Secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate: 1.2});
}
function exbirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do Número Secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e 10');
}

exbirMensagemInicial();

//função: trecho de codigo que executa uma ação e o nome deve ser descritivo; 
function verificarChute() {
let chute = document.querySelector("input").value;
if(chute==numeroAleatorio){
    exibirTextoNaTela('h1','Acertou!');
    let palavraTentativa = tentativas > 1? 'tentativas':'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
} else{
    if(chute>numeroAleatorio){
        exibirTextoNaTela('p','O número secreto é menor');
    }else{
        exibirTextoNaTela('p','O número secreto é maior');
    }
}//tentativas=tentativas+1
tentativas++;
limparCampo();
}
function gerarNumeroAleatorio(){
  let numeroEscolhido = parseInt(Math.random()*numeroLimite+1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
  if(quantidadeDeElementosNaLista==numeroLimite){
    listaDeNumerosSorteados=[];
}
  if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  }else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
}
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroAleatorio=gerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
    exbirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}