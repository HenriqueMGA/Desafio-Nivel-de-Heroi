let nomeDoHeroi = "Henrique"
let experienciaDoHeroi = Math.floor(Math.random() * (10001 - 1000) + 1000)

if (experienciaDoHeroi <= 1000) {
    console.log(`O Herói de nome ${nomeDoHeroi} está no nível de Ferro`)
} else if (experienciaDoHeroi > 1000 && experienciaDoHeroi <= 2000) {
    console.log(`O Herói de nome ${nomeDoHeroi} está no nível de Bronze`)
} else if (experienciaDoHeroi > 2000 && experienciaDoHeroi <= 5000) {
    console.log(`O Herói de nome ${nomeDoHeroi} está no nível de Prata`)
} else if (experienciaDoHeroi > 5000 && experienciaDoHeroi <= 7000) {
    console.log(`O Herói de nome ${nomeDoHeroi} está no nível de Ouro`)
} else if (experienciaDoHeroi > 7000 && experienciaDoHeroi <= 8000) {
    console.log(`O Herói de nome ${nomeDoHeroi} está no nível de Platina`)
} else if (experienciaDoHeroi > 8000 && experienciaDoHeroi <= 9000) {
    console.log(`O Herói de nome ${nomeDoHeroi} está no nível de Ascendente`)
} else if (experienciaDoHeroi > 9000 && experienciaDoHeroi <= 10000) {
    console.log(`O Herói de nome ${nomeDoHeroi} está no nível de Imortal`)
} else {
    console.log(`O Herói de nome ${nomeDoHeroi} está no nível de Radiante`)
}