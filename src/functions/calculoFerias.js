const feriasVencidas = (salario, periodo) => {
  let valor = (salario / 12) * periodo;
  return valor;
};

console.log(feriasVencidas(3000, 12));
