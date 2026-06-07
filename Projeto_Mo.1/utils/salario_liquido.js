function calcularSalarioLiquido(salarioBruto) {
    var salarioLiquido = salarioBruto - require('./inss').calcularINSS(salarioBruto) - require('./imposto_renda').calcularImpostoRenda(salarioBruto);
    return salarioLiquido;
}

module.exports = { calcularSalarioLiquido };