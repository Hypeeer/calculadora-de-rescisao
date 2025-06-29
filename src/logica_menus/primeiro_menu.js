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

  let retornoFerias;
  let retornoDecimo;
  let retornoFGTS;

  switch (tipoRescisao) {
    case TIPO_RESCISAO.PEDIDO_DE_DEMISSAO:
      retornoFerias = feriasVencidas(salarioBase, inputFerias());
      retornoDecimo = descimoTerceiroProporcional(salarioBase, inputDecimoTerceiro());
      break;
    case TIPO_RESCISAO.SEM_JUSTA_CAUSA:
    case TIPO_RESCISAO.ACORDO_ENTRE_PARTES:
    case TIPO_RESCISAO.RESICAO_INDIRETA:
      retornoFerias = feriasVencidas(salarioBase, inputFerias());
      retornoDecimo = descimoTerceiroProporcional(salarioBase, inputDecimoTerceiro());
      retornoFGTS = calculoFGTS(tipoRescisao, inputFGTS(tipoRescisao));
      break;
    case TIPO_RESCISAO.COM_JUSTA_CAUSA:
      break;
  }
  return { retornoFerias, retornoDecimo, retornoFGTS };
};

export default primeiroMenu;
