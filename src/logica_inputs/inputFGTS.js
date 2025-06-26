import input from 'readline-sync';

const inputFGTS = () => {
  console.log(`\n\n ------------------- Calculo Multa FGTS ------------------`);
  console.log(`\nPelo seu tipo de rescisão, você tem direito a multa do FGTS`);
  console.log(`\nPara o calculo informe o valor atual do seu FGTS`);

  const saldoFGTS = input.question(`Saldo FGTS: `);
  console.log(`------------------------------------------------------------\n`);

  return saldoFGTS;
};

export default inputFGTS;
