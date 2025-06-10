import TIPO_RESCISAO from '../enum_menu/tipoResicao.js';

const calculoFGTS = (escolhaUsuario, saldoFGTSFGTS) => {
  let valorFGTS = '';
  if (escolhaUsuario === TIPO_RESCISAO.SEM_JUSTA_CAUSA || escolhaUsuario === TIPO_RESCISAO.RESICAO_INDIRETA) {
    valorFGTS = (saldoFGTSFGTS * 40) / 100;
  } else if (escolhaUsuario === TIPO_RESCISAO.ACORDO_ENTRE_PARTES) {
    valorFGTS = (saldoFGTSFGTS * 20) / 100;
  } else {
    console.log(`Não tem direito ao FGTS`);
  }

  console.log(valorFGTS);
};

export default calculoFGTS;
