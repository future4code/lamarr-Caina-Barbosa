ˋˋˋ
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  salarioBase = 2000 
  comissaoFixa = 100 * qtdeCarrosVendidos
  comissaoPercentual = valorTotalVendas * 0.05
  salario = salarioBase + comissaoFixa + comissaoPercentual
  return salario
}
ˋˋˋ