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

if(player1.velocidade > player2.velocidade) 
  return console.log(`A velocidade do ${player1.nome} é maior que a velocidade do ${player2.nome}`);
if(player1.velocidade < player2.velocidade) 
  return console.log(`A velocidade do ${player1.nome} é menor que a velocidade do ${player2.nome}`);
return console.log(`A velocidade do ${player1.nome} é a mesma da velocidade do ${player2.nome}`);

