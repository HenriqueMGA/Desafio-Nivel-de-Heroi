let nomeDoHeroi = "Henrique"
let experienciaDoHeroi = Math.floor(Math.random() * 11000)
let nivelDoHeroi = ""

if (experienciaDoHeroi <= 1000) {
    nivelDoHeroi = "Ferro"
} else if (experienciaDoHeroi > 1000 && experienciaDoHeroi <= 2000) {
    nivelDoHeroi = "Bronze"
} else if (experienciaDoHeroi > 2000 && experienciaDoHeroi <= 5000) {
    nivelDoHeroi = "Prata"
} else if (experienciaDoHeroi > 5000 && experienciaDoHeroi <= 7000) {
    nivelDoHeroi = "Ouro"
} else if (experienciaDoHeroi > 7000 && experienciaDoHeroi <= 8000) {
    nivelDoHeroi = "Platina"
} else if (experienciaDoHeroi > 8000 && experienciaDoHeroi <= 9000) {
    nivelDoHeroi = "Ascendente"
} else if (experienciaDoHeroi > 9000 && experienciaDoHeroi <= 10000) {
    nivelDoHeroi = "Imortal"
} else {
    nivelDoHeroi = "Radiante"
}

console.log(`O Herói de nome: ${nomeDoHeroi}, está no nível: ${nivelDoHeroi}, com: ${experienciaDoHeroi} pontos de experiência`)