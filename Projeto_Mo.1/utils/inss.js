function calcularINSS(salario_bruto) {
    var desconto;
    if (salario_bruto <= 1518.00) {
        var desconto = (salario_bruto * 0.075) - 0;
    } else if (salario_bruto >= 1518.01 && salario_bruto <= 2793.88) {
        var desconto = (salario_bruto * 0.09) - 22.77;
    } else if (salario_bruto >= 2798.89 && salario_bruto <= 4190.83) {
        var desconto = (salario_bruto * 0.12) - 106.59;
    } else if (salario_bruto >= 4190.84 && salario_bruto <= 8157.41) {
        var desconto = (salario_bruto * 0.14) - 190.40;
    } else if (salario_bruto > 8157.41) {
        var desconto = 951.62;
    }
    return desconto;
}

module.exports = { calcularINSS };
