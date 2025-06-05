import TIPO_AVISO from '../enum_menu/tipoAviso.js';

const segundoMenu = (escolhaAviso) => {
  let tipoAviso = '';

  switch (escolhaAviso) {
    case '1':
      tipoAviso = TIPO_AVISO.AVISO_TRABALHADO;
      break;
    case '2':
      tipoAviso = TIPO_AVISO.AVISO_INDENIZADO;
      break;
    case '3':
      tipoAviso = TIPO_AVISO.AVISO_DISPENSADO;
      break;
    case '4':
      tipoAviso = TIPO_AVISO.NAO_CUMPRIDO;
      break;
    default:
      break;
  }

  switch (tipoAviso) {
    case TIPO_AVISO.AVISO_TRABALHADO:
      console.log('certo');
      break;
    case TIPO_AVISO.AVISO_INDENIZADO:
      break;
    case TIPO_AVISO.AVISO_DISPENSADO:
      break;
    case TIPO_AVISO.NAO_CUMPRIDO:
      break;
    default:
      break;
  }
};

export default segundoMenu;
