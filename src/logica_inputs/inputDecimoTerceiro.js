import input from 'readline-sync';

const inputDecimoTerceiro = () => {
  let inputUsuario = '';
  console.log(`\n\n------------------------ Calculo De Decimo Terceiro ----------------------------`);
  console.log(`\nVocê possui descimo terceiro proporcionais? caso sim, informe meses trabalhados!`);
  inputUsuario = input.question(`Sim ou Não: `);

  if (inputUsuario === 'sim') {
    console.log(`\nQuantos meses trabalhados?`);
    inputUsuario = input.question(`Meses: `);
  }
  console.log(`--------------------------------------------------------------------------------`);

  return inputUsuario;
};

export default inputDecimoTerceiro;
