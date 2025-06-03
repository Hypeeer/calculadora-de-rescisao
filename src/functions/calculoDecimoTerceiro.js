const descimoTerceiroProporcional = (salarioBase, meses) => {
  const valorMes = salarioBase / 12;
  const ValorTotal = valorMes * meses;

  return ValorTotal;
};

export default descimoTerceiroProporcional;
