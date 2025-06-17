import TIPO_RESCISAO from '../enum_menu/tipoResicao.js';

const calculoFGTS = (escolhaUsuario, saldoFGTS) => {
  let valorFGTS = '';
  if (escolhaUsuario === TIPO_RESCISAO.SEM_JUSTA_CAUSA || escolhaUsuario === TIPO_RESCISAO.RESICAO_INDIRETA) {
    valorFGTS = (saldoFGTS * 40) / 100;
  } else if (escolhaUsuario === TIPO_RESCISAO.ACORDO_ENTRE_PARTES) {
    valorFGTS = (saldoFGTS * 20) / 100;
  } else {
    console.log(`Não tem direito ao FGTS`);
  }

  return valorFGTS;
};

export default calculoFGTS;
