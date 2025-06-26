import input from 'readline-sync';

const inputFerias = () => {
  let inputUsuario = '';
  console.log(`\n-----------------------Calculo De ferias--------------------------`);
  console.log(`\nVocê possui ferias vencidas ? caso sim, informe meses trabalhados!`);
  inputUsuario = input.question(`Sim ou Não: `);

  if (inputUsuario === 'sim') {
    console.log(`\nQuantos meses trabalhados?`);
    inputUsuario = input.question(`Meses: `);
  }
  console.log(`-------------------------------------------------------------------`);

  return inputUsuario;
};

export default inputFerias;
