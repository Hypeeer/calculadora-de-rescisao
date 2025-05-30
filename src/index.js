import prompt from 'readline-sync';
import TIPO_RESCISAO from './enum_menu/tipoResicao.js';

console.log(`---Calculadora de resição---`);
console.log(`1 - Pedido de demissão`);
console.log(`2 - Demissão sem justa causa`);
console.log(`3 - Demissão com justa causa`);
console.log(`4 - Acordo entre as partes`);
console.log(`5 - Rescição indireta`);
console.log(`----------------------------`);
const escolha = prompt.question(`Qual o tipo de resição ? `);

let tipoResicao = '';

switch (escolha) {
  case '1':
    tipoResicao = TIPO_RESISAO.PEDIDO_DE_DEMISSAO;
    break;
  case '2':
    tipoResicao = TIPO_RESISAO.SEM_JUSTA_CAUSA;
    break;
  case '3':
    tipoResicao = TIPO_RESISAO.COM_JUSTA_CAUSA;
    break;
  case '4':
    tipoResicao = TIPO_RESCISAO.ACORDO_ENTRE_PARTES;
    break;
  case '5':
    tipoResicao = TIPO_RESCISAO.RESICAO_INDIRETA;
    break;
  default:
}

console.log(tipoResicao);
