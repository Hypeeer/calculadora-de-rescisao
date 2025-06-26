import input from 'readline-sync';
import TIPO_RESCISAO from '../enum_menu/tipoResicao.js';

const inputFGTS = (escolhaUsuario) => {
  let saldoFGTS;
  if (escolhaUsuario === TIPO_RESCISAO.SEM_JUSTA_CAUSA || escolhaUsuario === TIPO_RESCISAO.RESICAO_INDIRETA) {
    console.log(`\n\n ---------------------------- Calculo Multa FGTS -------------------------------`);
    console.log(`\nPelo seu tipo de rescisão, você tem direito a multa do FGTS de 40%`);
    console.log(`\nPara o calculo informe o valor atual do seu FGTS`);

    saldoFGTS = input.question(`Saldo FGTS: `);
    console.log(`\n----------------------------------------------------------------------------------`);
  } else if (escolhaUsuario === TIPO_RESCISAO.ACORDO_ENTRE_PARTES) {
    console.log(`\n\n ------------------- Calculo Multa FGTS ------------------`);
    console.log(`\nPelo seu tipo de rescisão, você tem direito a multa do FGTS de 20%`);
    console.log(`\nPara o calculo informe o valor atual do seu FGTS`);

    saldoFGTS = input.question(`Saldo FGTS: `);
    console.log(`\n----------------------------------------------------------------------------------`);
  }

  return saldoFGTS;
};

export default inputFGTS;
