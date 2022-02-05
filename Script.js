const prompt = require("prompt-sync")();

function random(maximo, minimo = 0) {
  //Função random
  let max = Math.floor(maximo);
  let min = Math.ceil(minimo);
  let random = Math.random() * (max - min + 1) + min;
  random = parseInt(random);
  return random;
}

function criarJogador(qtd) {
  //Função para construir jogadores, como objetos

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
  //Funções de comparação para o .sort
  return a.dado - b.dado;
}
function compararVitorias(a, b) {
  return a.vitorias - b.vitorias;
}

function validacaoNumero(a) {
  //Função de validação para prompt numérico
  while (true) {
    if (!isNaN(a)) break;
    else {
      console.log(`Por favor digite um numero valido: `);
      a = prompt(``);
    }
  }
}
const jogadores = []; //Definição ddos arrays de jogadores e array de nomes
const nomes = [];
while (true) {
  //Definição da quantidade de jogadores e dos nomes de cada um
  console.log(`Quantos jogadores irão jogar?`);
  let qtdadeJogadores = +prompt(``);
  validacaoNumero(qtdadeJogadores);
  for (i = 0; i < qtdadeJogadores; i++) {
    let nome = prompt(`Digite o nome do jogador ${i + 1}: `);
    nomes.push(nome);
  }
  criarJogador(qtdadeJogadores); //Criação dos objetos jogadores
  console.log(`---------------------------`); //Definição de quantas rodadas o jogo irá ter
  console.log(`Quantas rodadas vocês irão jogar?`);
  let qtdadeRodadas = +prompt(``);
  validacaoNumero(qtdadeRodadas);
  for (i = 0; i < qtdadeRodadas; i++) {
    //Definição dos valores aleatórios para cada jogador e contador de vitórias para cada rodada do jogo
    jogadores[i].dado = random(20, 1);
    jogadores.sort(compararDados); //Organizando array a partir dos valores sorteados (dados rolados)
    for (a in jogadores) {
      if (jogadores[a].dado == jogadores[jogadores.length - 1].dado) {
        //Condição onde é aplicado 1 ponto a vitória de cada jogador com o maior valor, mesmo com empate
        jogadores[a].vitorias += 1;
      }
    }
  }

  jogadores.sort(compararVitorias); //Organizando array a partir da quantidade de vitória
  console.log(`---------------------------`); //Mostrando o campeão do jogo, limpando os arrays e dando opção de jogar novamente.
  console.log(
    `O grande campeão deste jogo foi o jogador ${
      jogadores[jogadores.length - 1].nome
    } com incríveis ${jogadores[jogadores.length - 1].vitorias} vitórias.`
  );
  jogadores.splice(0);
  nomes.splice(0);
  console.log(`Você quer jogar novamente?`);
  continuar = prompt(``).toUpperCase().trim();
  if (continuar != "SIM") break;
  console.clear();
}
console.clear();
