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

(async function main() {
  console.log("Iniciou Corrida");  
})()
