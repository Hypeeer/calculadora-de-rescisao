const formatarFerias = (resultado) => {
  const valorFeraisTotais = resultado.retornoFerias;
  console.log(`A receber de ferias: ${valorFeraisTotais.toFixed(2)}`);
};
const formatarDecimo = (resultado) => {
  const valorDecimoTotais = resultado.retornoDecimo;
};
const formatarFGTS = (resultado) => {
  const valorFGTSTotais = resultado.retornoFGTS;
};

export default formatarFerias;
