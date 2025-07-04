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

async function logRollResult (characterName, block, diceResult, attribute) {
  console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
    diceResult + attribute
  }`);  
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round < 5; round++) {
    console.log(`\n🏁 Rodada ${round}`);    
    
    let block = await getRandomBlock() 
      console.log(`Bloco: ${block}`)  
      
    let diceResult1 = await rollDice()
    let diceResult2 = await rollDice()

    let totalTestSkill1 = 0
    let totalTestSkill2 = 0

    if(block=="RETA"){
      totalTestSkill1 = diceResult1 + character1.velocidade
      totalTestSkill2 = diceResult2 + character2.velocidade

      await logRollResult(character1.nome, "velocidade", diceResult1, character1.velocidade)
      await logRollResult(character2.nome, "velocidade", diceResult2, character2.velocidade)
    }

    if(block=="CURVA"){
      totalTestSkill1 = diceResult1 + character1.manobrabilidade
      totalTestSkill2 = diceResult2 + character2.manobrabilidade

      await logRollResult(character1.nome, "manobrabilidade", diceResult1, character1.manobrabilidade)
      await logRollResult(character2.nome, "manobrabilidade", diceResult2, character2.manobrabilidade)
    }

    if(block=="CONFRONTO"){
     let powerResult1 = diceResult1 + character1.poder
     let powerResult2 = diceResult2 + character2.poder

     console.log(`${character1.nome} confrontou com ${character2.nome}! 🥊`)

     await logRollResult(character1.nome, "poder", diceResult1, character1.poder)
     await logRollResult(character2.nome, "poder", diceResult2, character2.poder)

     if(powerResult1 > powerResult2 && character2.pontos > 0){
      console.log(`${character1.nome} venceu o confronto! ${character2.nome} perdeu 1 ponto 🐢`)      
      character2.pontos--
     }

      if(powerResult2 > powerResult1 && character1.pontos > 0){
      console.log(`${character2.nome} venceu o confronto! ${character1.nome} perdeu 1 ponto 🐢`) 
      character1.pontos--;
     }      
     console.log(powerResult2 === powerResult1 ? "Confronto empatado! Nenhum ponto foi perdido" : "")  
    } 
     
    if(totalTestSkill1 > totalTestSkill2){
      console.log(`${character1.nome} marcou 1 ponto!`)
      character1.pontos++;      
    } else if(totalTestSkill2 > totalTestSkill1){
      console.log(`${character2.nome} marcou 1 ponto!`)
      character2.pontos++;
    }
    console.log("---------------------------")       
  }  
}

async function winner(character1, character2) {
  console.log("Resultado Final:");
  console.log(`${character1.nome}: ${character1.pontos} ponto(s)`)
  console.log(`${character2.nome}: ${character2.pontos} ponto(s)`)

  if(character1.pontos > character2.pontos)
    console.log(`\n${character1.nome} foi o vencedor 🏆 `)   
   else if(character2.pontos > character1.pontos)
    console.log(`\n${character2.nome} foi o vencedor 🏆 `)  
   else  console.log("A corrida terminou empatada!")  
}

(async function main() {
  console.log(`
    🚨 🏁 Corrida entre o ${player1.nome} e o ${player5.nome} começando... \n
    `);  
  await playRaceEngine(player1, player5)
  await winner(player1, player5)
})();

