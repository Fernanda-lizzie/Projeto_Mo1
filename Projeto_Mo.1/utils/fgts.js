function calcularFGTS(salario_bruto) {
    var fgts = salario_bruto * 0.08;
    return fgts;
}
module.exports = { calcularFGTS };