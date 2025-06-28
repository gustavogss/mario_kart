const player1 = {
  nome: "Mario",
  velocidade: 4,
  manobrabilidade: 3,
  poder:3,
  pontos:0,
};

const player2 = {
  nome: "Peach",
  velocidade: 3,
  manobrabilidade: 4,
  poder:2,
  pontos: 0,
};

const player3 = {
  nome: "Yoshi",
  velocidade: 2,
  manobrabilidade: 4,
  poder:3,
  pontos: 0,
};

const player4 = {
  nome: "Bowser",
  velocidade: 5,
  manobrabilidade: 2,
  poder:5,
  pontos: 0,
};

const player5 = {
  nome: "Luigi",
  velocidade: 3,
  manobrabilidade: 4,
  poder:4,
  pontos: 0,
};

const player6 = {
  nome: "Donkey Kong",
  velocidade: 2,
  manobrabilidade: 2,
  poder:5,
  pontos: 0,
};

async function  rollDice() {
  return  Math.floor(Math.random()*6 + 1)
}

async function getRandomBlock() {
  let random = Math.random()
  let result = ""
  switch (true) {
    case random < 0.33:
      result = "RETA"
      break;
    case random < 0.66:
      result = "CURVA"
      break;
    default:
       result = "CONFRONTO"
  }
  return result
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round < 5; round++) {
    console.log(`🏁 Rodada ${round}`);    
    
    let block = await getRandomBlock() 
      console.log(`Bloco: ${block}`)      
    }    
  }

(async function main() {
  console.log(`
    🚨 🏁 Corrida entre o ${player1.nome} e o ${player5.nome} começando... \n
    `);  

  await playRaceEngine(player1, player5)
})()
