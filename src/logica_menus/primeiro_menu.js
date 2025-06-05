import TIPO_RESCISAO from '../enum_menu/tipoResicao.js';

//Logica de calculo do sistema
import descimoTerceiroProporcional from '../functions/calculoDecimoTerceiro.js';
import feriasVencidas from '../functions/calculoFeriasVencidas.js';

//Modulo de perguntas para o menu
import inputFerias from '../logica/inputFeriasVencidas.js';
import inputDecimoTerceiro from '../logica/inputDecimoTerceiro.js';

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
      feriasVencidas(salarioBase, inputFerias());
      descimoTerceiroProporcional(salarioBase, inputDecimoTerceiro());
      break;
    case TIPO_RESCISAO.SEM_JUSTA_CAUSA:
      feriasVencidas(salarioBase, inputFerias());
      descimoTerceiroProporcional(salarioBase, inputDecimoTerceiro());
      break;
    case TIPO_RESCISAO.COM_JUSTA_CAUSA:
      break;
    case TIPO_RESCISAO.ACORDO_ENTRE_PARTES:
      feriasVencidas(salarioBase, inputFerias());
      descimoTerceiroProporcional(salarioBase, inputDecimoTerceiro());
      break;
    case TIPO_RESCISAO.RESICAO_INDIRETA:
      feriasVencidas(salarioBase, inputFerias());
      descimoTerceiroProporcional(salarioBase, inputDecimoTerceiro());
      break;
  }
};

export default primeiroMenu;
