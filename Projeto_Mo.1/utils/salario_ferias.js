function calcularSalarioFerias(salario_bruto) {
    var salario_ferias = salario_bruto + (salario_bruto / 3);
    var salario_ferias_liquido = salario_ferias - require('./inss').calcularINSS(salario_ferias)- require('./imposto_renda').calcularImpostoRenda(salario_ferias);
    return salario_ferias_liquido;
}
module.exports = { calcularSalarioFerias }; 