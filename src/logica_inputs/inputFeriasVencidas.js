import input from 'readline-sync';

const inputFerias = () => {
  let inputUsuario = '';
  inputUsuario = input.question(`Você possi ferias vencidas ? caso sim quantas ? `);

  if (inputUsuario === 'sim') {
    inputUsuario = input.question(`Qantos meses trabalhados ? `);
  }
  return inputUsuario;
};

export default inputFerias;
