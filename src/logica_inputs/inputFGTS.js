import input from 'readline-sync';

const inputFGTS = () => {
  const saldoFGTS = input.question(`Saldo FGTS ? `);
  return saldoFGTS;
};

export default inputFGTS;
