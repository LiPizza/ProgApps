const prompt = require ("prompt-sync")();

let d = prompt ("Escreva a distância da viagem: ");
let cm = prompt ("Escreva o consumo médio do seu veículo(em KM/L): ");
let vg = prompt ("Escreva o valor atual da gasolina: ");

console.log ("Serão necessários", d/cm, "litros de gasolina");
console.log ("A viagem de", d, "irá custar: ", (d/cm)*vg, "reais.");