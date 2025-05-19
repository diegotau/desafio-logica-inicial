//importando o modulo readline
const readline = require("readline");

//Criando a interface de entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//coletando os dados do usuário
rl.question("Digite o nome do personagem: ", function(nome) {
    rl.question("Digite o XP do personagem: ", function(xp) {
        xp = parseInt(xp); // Convertendo XP para número
//Classificando o nível do heroi
        let nivel;
        switch(true) {
            case xp <= 1000:
                nivel = "Ferro";
                break;
            case xp > 1000 && xp <= 2000:
                nivel = "Bronze";
                break;
            case xp > 2000 && xp <= 5000:
                nivel = "Prata";
                break;
            case xp > 5000 && xp <= 7000:
                nivel = "Ouro";
                break;
            case xp > 7000 && xp <= 8000:
                nivel = "Platina";
                break;
            case xp > 8000 && xp <= 9000:
                nivel = "Ascendente";
                break;
            case xp > 9000 && xp <= 10000:
                nivel = "Imortal";
                break;
            default:
                nivel = "Radiante";
                break;
        }
//apresentando o resultado após a classificação
        console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

        rl.close(); //encerrando a readline
    });
});
