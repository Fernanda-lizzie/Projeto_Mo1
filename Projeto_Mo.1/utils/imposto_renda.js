function calcularImpostoRenda(salario_bruto) {
    var aliquota = 0;
    var deducao = 0;

    if (salario_bruto <= 2428.80) {
        aliquota = 0;
        deducao = 0;
    } else if (salario_bruto <= 2826.65) {
        aliquota = 0.075; // 7,5%
        deducao = 182.16;
    } else if (salario_bruto <= 3751.05) {
        aliquota = 0.15; // 15%
        deducao = 394.16;
    } else if (salario_bruto <= 4664.68) {
        aliquota = 0.225; // 22,5%
        deducao = 675.49;
    } else {
        aliquota = 0.275; // 27,5%
        deducao = 908.73;
    }

    var irrf = (salario_bruto * aliquota) - deducao;
    
    if (irrf < 0) {
        irrf = 0;
    }
    return irrf;
}

module.exports = { calcularImpostoRenda };
