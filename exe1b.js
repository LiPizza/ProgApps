const prompt = require ("prompt-sync")();

let n1 = Number(prompt("Escreva o valor 1: "));
let n2 = Number(prompt("Escreva o valor 2: "));

console.log("A soma dos valores é: ",n1 + n2);
console.log("A diferença entre os dois valores é: ", n1-n2);
console.log("A multiplicação entre os dois valores é: ", n1*n2);
console.log("A divisão entre os dois valores é: ", n1/n2);
console.log("A sobra da divisão é: ", n1%n2);