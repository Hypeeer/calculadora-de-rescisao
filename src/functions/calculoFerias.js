const feriasVencidas = (salario, periodo) => {
  const valor = (salario / 12) * periodo;
  const proporcional = valor * (1 / 3);
  const valorTotal = valor + proporcional;

  return valorTotal;
};

console.log(feriasVencidas(3000, 12));
