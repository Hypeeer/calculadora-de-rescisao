import input from 'readline-sync';

const inputDecimoTerceiro = () => {
  let inputUsuario = '';

  inputUsuario = input.question(`Possui decimo terceiro proporcionais ? caso sim, quantos meses? `);

  if (inputUsuario === 'sim') {
    inputUsuario = input.question(`Quantos meses trabalhados ? `);
  }

  return inputUsuario;
};

export default inputDecimoTerceiro;
