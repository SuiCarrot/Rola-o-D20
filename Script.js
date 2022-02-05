const prompt = require("prompt-sync")();

function random(maximo, minimo = 0) {
    let max = Math.floor(maximo);
    let min = Math.ceil(minimo);
    let random = Math.random() * (max - min + 1) + min;
    random = parseInt(random);
    return random;
}

function criarJogador(qtd) {

    for (let i = 0; i < qtd; i++) {
        let jogador = {
            nome: nomes[i],
            dado: 0,
            vitorias: 0,
        };
        jogadores.push(jogador);
    }
    return jogadores;
}
function compararDados(a, b) {
    return a.dado - b.dado;
  }
function compararVitorias(a, b) {
    return a.vitorias - b.vitorias;
}

function validacaoNumero (a){
    while(true){
        if (!isNaN(a)) break;
        else{
            console.log(`Por favor digite um numero valido: `)
            a = prompt(``)
        }
    }
}

const jogadores = [];
const nomes = [];
while (true){
console.log(`Quantos jogadores irão jogar?`)
let qtdadeJogadores = +prompt(``)
validacaoNumero(qtdadeJogadores)
for(i=0;i<qtdadeJogadores;i++){
    let nome = prompt(`Digite o nome do jogador ${i+1}: `)
    nomes.push(nome)
}
criarJogador(qtdadeJogadores)
console.log(`---------------------------`)
console.log(`Quantas rodadas vocês irão jogar?`)
let qtdadeRodadas = +prompt(``)
validacaoNumero(qtdadeRodadas)
for(i=0;i<qtdadeRodadas;i++){
    jogadores[i].dado = random(20,1)
    jogadores.sort(compararDados)
    for (a in jogadores){
        if(jogadores[a].dado == jogadores[jogadores.length-1].dado){
            jogadores[a].vitorias += 1
        }
    }
}

jogadores.sort(compararVitorias)
console.log(jogadores)
console.log(`---------------------------`)
console.log(`O grande campeão deste jogo foi o jogador ${jogadores[jogadores.length-1].nome} com incríveis ${jogadores[jogadores.length-1].vitorias} vitórias.`)
jogadores.splice(0)
nomes.splice(0)
console.log(`Você quer jogar novamente?`)
continuar = prompt(``).toUpperCase().trim()
if (continuar != "SIM")break;
console.clear();
}
console.clear();
