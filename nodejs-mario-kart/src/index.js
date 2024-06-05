const player1 = {
    nome: "Mario",
    velocidade: 4,
    manobrabilidade: 3,
    poder: 3,
    pontos: 0,
};

const player2 = {
    nome: "Luigi",
    velocidade: 3,
    manobrabilidade: 4,
    poder: 4,
    pontos: 0,
};

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random();
    let result;

    switch (true) {
        case random < 0.33:
            result = "RETA";
            break;
        case random < 0.66:
            result = "CURVA";
            break;
        default:
            result = "CONFRONTO";
            break;
    }
    return result;
}

async function playerRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada ${round}`);

        // sortear bloco
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);

    }
    // rolar os dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    // teste de habilidade
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "RETA") {
        totalTestSkill1 = diceResult1 + character1.velocidade;
        totalTestSkill2 = diceResult2 + character2.velocidade;
    }
    if (block === "CURVA") {
        totalTestSkill1 = diceResult1 + character1.manobrabilidade;
        totalTestSkill2 = diceResult2 + character2.manobrabilidade;
    }
    if (block === "CONFRONTO") {
        let powerResult1 = diceResult1 + character1.poder;
        let powerResult2 = diceResult2 + character2.poder;
    }
}

(async function main() {
    console.log(
        `🏁🚨 Corrida entre ${player1.nome} e ${player2.nome} começando...\n`
    );

    await playerRaceEngine(player1, player2);



})();