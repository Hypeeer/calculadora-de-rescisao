// Bibliotecas do sistema
import prompt, { question } from 'readline-sync';

// Modulo dos menus separados
import primeiroMenu from './logica_menus/primeiro_menu.js';
import segundoMenu from './logica_menus/segundo_menu.js';
import { formatarFerias, formatarDecimo, formatarFGTS } from './logica_menus/exibir_resutados.js';

console.log(`---Calculadora de resição---`);
console.log(`1 - Pedido de demissão`);
console.log(`2 - Demissão sem justa causa`);
console.log(`3 - Demissão com justa causa`);
console.log(`4 - Acordo entre as partes`);
console.log(`5 - Rescição indireta`);
console.log(`---------------------------- \n`);
const escolhaResicao = prompt.question(`Tipo de resição: `);

const salarioBase = prompt.question(`\nSalario atual: `);

const resutado = primeiroMenu(escolhaResicao, salarioBase);

const resultadoFinal = {
  ferias: formatarFerias(resutado),
  decimo: formatarDecimo(resutado),
  fgts: formatarFGTS(resutado),
};

console.log(resultadoFinal.ferias);
console.log(resultadoFinal.decimo);
console.log(resultadoFinal.fgts);

/* console.log(`--- Tipo de aviso previor ---`);
console.log(`1 - Trabalhado`);
console.log(`2 - Indenizado`);
console.log(`3 - Dispensado`);
console.log(`4 - Nao comprido`);
console.log(`-----------------------------`);
const escolhaAviso = prompt.question(`Qual tipo de aviso ? `);

segundoMenu(escolhaAviso); */
