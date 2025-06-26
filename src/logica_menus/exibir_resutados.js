const formatarFerias = (resultado) => {
  const valorFeraisTotais = resultado.retornoFerias;
  return `\nA receber de Ferias: ${valorFeraisTotais.toFixed(2)}`;
};
const formatarDecimo = (resultado) => {
  const valorDecimoTotais = resultado.retornoDecimo;
  return `\nA receber de Decimo Terceiro: ${valorDecimoTotais.toFixed(2)}`;
};
const formatarFGTS = (resultado) => {
  const valorFGTSTotais = resultado.retornoFGTS;
  let avisoParaOUsuario;
  if (!valorFGTSTotais) {
    avisoParaOUsuario = `\nVocê não tem direito a multa do FGTS!`;
  } else {
    avisoParaOUsuario = `\nA receber de multa do FGTS: ${valorFGTSTotais.toFixed(2)}`;
  }
  return avisoParaOUsuario;
};

export { formatarFerias, formatarDecimo, formatarFGTS };
