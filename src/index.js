// Bibliotecas do sistema
import prompt, { question } from 'readline-sync';

// Modulo dos menus separados
import primeiroMenu from './logica_menus/primeiro_menu.js';
import segundoMenu from './logica_menus/segundo_menu.js';

console.log(`---Calculadora de resição---`);
console.log(`1 - Pedido de demissão`);
console.log(`2 - Demissão sem justa causa`);
console.log(`3 - Demissão com justa causa`);
console.log(`4 - Acordo entre as partes`);
console.log(`5 - Rescição indireta`);
console.log(`----------------------------`);
const escolhaResicao = prompt.question(`Qual o tipo de resição ? `);
const salarioBase = prompt.question(`Salario atual: `);

primeiroMenu(escolhaResicao, salarioBase);

console.log(`--- Tipo de aviso previor ---`);
console.log(`1 - Trabalhado`);
console.log(`2 - Indenizado`);
console.log(`3 - Dispensado`);
console.log(`4 - Nao comprido`);
console.log(`-----------------------------`);
const escolhaAviso = prompt.question(`Qual tipo de aviso ? `);

segundoMenu(escolhaAviso);
