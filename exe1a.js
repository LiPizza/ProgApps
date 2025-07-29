const prompt = require ("prompt-sync")();

let nome = prompt ("Informe o seu nome:");
let idade = prompt ("Informe a sua idade: ");
let altura = prompt (" Informe a sua altura: ");

console.log("Meu nome é: ", nome);
console.log("Tenho", idade, "anos");
console.log("e", altura, "metros.");