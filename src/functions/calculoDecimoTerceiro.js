const descimoTerceiroProporcional = (salarioBase, meses) => {
  const valorMes = salarioBase / 12;
  const valorTotal = valorMes * meses;

  return valorTotal;
};

export default descimoTerceiroProporcional;
