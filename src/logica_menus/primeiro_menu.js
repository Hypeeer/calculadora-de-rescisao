import TIPO_RESCISAO from '../enum_menu/tipoResicao.js';

//Logica de calculo do sistema
import descimoTerceiroProporcional from '../functions/calculoDecimoTerceiro.js';
import feriasVencidas from '../functions/calculoFeriasVencidas.js';
import calculoFGTS from '../functions/calculoFgts.js';

//Modulo de perguntas para o menu
import inputFerias from '../logica_inputs/inputFeriasVencidas.js';
import inputDecimoTerceiro from '../logica_inputs/inputDecimoTerceiro.js';
import inputFGTS from '../logica_inputs/inputFGTS.js';

const primeiroMenu = (escolhaResicao, salarioBase) => {
  let tipoRescisao = '';

  switch (escolhaResicao) {
    case '1':
      tipoRescisao = TIPO_RESCISAO.PEDIDO_DE_DEMISSAO;
      break;
    case '2':
      tipoRescisao = TIPO_RESCISAO.SEM_JUSTA_CAUSA;
      break;
    case '3':
      tipoRescisao = TIPO_RESCISAO.COM_JUSTA_CAUSA;
      break;
    case '4':
      tipoRescisao = TIPO_RESCISAO.ACORDO_ENTRE_PARTES;
      break;
    case '5':
      tipoRescisao = TIPO_RESCISAO.RESICAO_INDIRETA;
      break;
  }

  switch (tipoRescisao) {
    case TIPO_RESCISAO.PEDIDO_DE_DEMISSAO:
    case TIPO_RESCISAO.SEM_JUSTA_CAUSA:
    case TIPO_RESCISAO.ACORDO_ENTRE_PARTES:
    case TIPO_RESCISAO.RESICAO_INDIRETA:
      feriasVencidas(salarioBase, inputFerias());
      descimoTerceiroProporcional(salarioBase, inputDecimoTerceiro());
      calculoFGTS(tipoRescisao, inputFGTS());
      break;
    case TIPO_RESCISAO.COM_JUSTA_CAUSA:
      break;
  }
};

export default primeiroMenu;
