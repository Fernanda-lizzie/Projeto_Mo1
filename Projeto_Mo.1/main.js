const readlineSync = require('readline-sync');

var empresa = {
    nome: '',
    razao_social: '',
    cnpj: '',
    inscricao_estadual: '',
    areas_atuacao: [],
    meta_anual:[],
    dataFundacao: '',

    endereco:{ 
        logradouro:'',
        numero:'',
        complemento:'',
        bairro:'',
        cidade:'',
        estado:'',
        cep:''},

    contato: { 
        telefone:'',
        email:'',
        site:''},

    funcionarios: []
}
// Loop principal do sistema
while (true) {
    require('./utils/exibirMenu').exibirMenu();
    var opcao = readlineSync.question('Escolha uma opcao: \n');

    if (opcao == '0') {
        console.log('Saindo do sistema. Até logo!');
        break;   
    } else if (opcao == '1') {
        require('./utils/sobreSoftware').sobreSoftware();
        console.log('\n');
        var voltarMenu = readlineSync.question('➤ Pressione ENTER para voltar ao menu principal...');
    } else if (opcao == '2') {
        console.log('=====================================================');
        console.log('           CALCULADORA DE SALÁRIO LÍQUIDO            ');
        console.log('=====================================================\n');
        var salario_bruto = parseFloat(readlineSync.question('Digite o salário bruto do funcionário : R$ '));
        console.log('======================================================');
        console.log('             DEMONSTRATIVO DE PAGAMENTO               ');
        console.log('======================================================\n');
        console.log('📰📄\n');
        console.log('Salário Bruto: R$' + salario_bruto.toFixed(2));
        require('./utils/fgts').calcularFGTS(salario_bruto);
        require('./utils/salario_liquido').calcularSalarioLiquido(salario_bruto);
        console.log('\n');
        console.log('======================================================');
        console.log('        Obrigado por usar nossa calculadora!         ');
        console.log('======================================================\n');

        var voltarMenu = readlineSync.question('➤ Pressione ENTER para voltar ao menu principal...');
    } else if (opcao == '3') {
        console.log('======================================================');
        console.log('          EDITAR DADOS BASICOS DA EMPRESA             ');
        console.log('======================================================\n');
        console.log('📝 Por favor, insira os novos dados da empresa:');
        console.log('-----------------------------------------------\n');
        empresa.nome = readlineSync.question('➤ Nome da Empresa: ');
        empresa.razao_social = readlineSync.question('➤ Razão Social: ');
        empresa.cnpj = readlineSync.question('➤ CNPJ: ');
        empresa.inscricao_estadual = readlineSync.question('➤ Inscrição Estadual: ');
        empresa.dataFundacao = readlineSync.question('➤ Data de Fundação (DD/MM/AAAA): ');
        console.log('\nDados atualizados com sucesso!\n');
        console.log(`
            Nome: ${empresa.nome}
            Razão Social: ${empresa.razao_social}
            CNPJ: ${empresa.cnpj}
            Inscrição Estadual: ${empresa.inscricao_estadual}
            Data de Fundação: ${empresa.dataFundacao}
        `);
        console.log('======================================================\n');
        var voltarMenu = readlineSync.question('➤ Pressione ENTER para voltar ao menu principal...');
    } else if (opcao == '4') {
        console.log('======================================================');
        console.log('            EDITAR ENDEREÇO DA EMPRESA                ');
        console.log('======================================================\n');
        console.log('📝 Por favor, insira o novo endereço da empresa:');
        console.log('-----------------------------------------------\n');
        empresa.endereco.logradouro = readlineSync.question('➤ Logradouro: ');
        empresa.endereco.numero = readlineSync.question('➤ Número: ');
        empresa.endereco.complemento = readlineSync.question('➤ Complemento: ');
        empresa.endereco.bairro = readlineSync.question('➤ Bairro: ');
        empresa.endereco.cidade = readlineSync.question('➤ Cidade: ');
        empresa.endereco.estado = readlineSync.question('➤ Estado: ');
        empresa.endereco.cep = readlineSync.question('➤ CEP: ');
        console.log('\nEndereço atualizado com sucesso!\n');
        console.log(`
            Logradouro: ${empresa.endereco.logradouro}
            Número: ${empresa.endereco.numero}
            Complemento: ${empresa.endereco.complemento}
            Bairro: ${empresa.endereco.bairro}
            Cidade: ${empresa.endereco.cidade}
            Estado: ${empresa.endereco.estado}
            CEP: ${empresa.endereco.cep}
        `);
        console.log('======================================================\n');
        var voltarMenu = readlineSync.question('➤ Pressione ENTER para voltar ao menu principal...');
    } else if (opcao == '5') {
        console.log('======================================================');
        console.log('          EDITAR DADOS DE CONTATO DA EMPRESA          ');
        console.log('======================================================\n');
        console.log('📝 Por favor, insira os novos dados de contato da empresa:');
        console.log('-----------------------------------------------\n');
        empresa.contato.telefone = readlineSync.question('➤ Telefone: ');
        empresa.contato.email = readlineSync.question('➤ Email: ');
        empresa.contato.site = readlineSync.question('➤ Site: ');
        console.log('\nDados de contato atualizados com sucesso!\n');
        console.log(`
            Telefone: ${empresa.contato.telefone}
            Email: ${empresa.contato.email}
            Site: ${empresa.contato.site}
        `);
        console.log('======================================================\n');
        var voltarMenu = readlineSync.question('➤ Pressione ENTER para voltar ao menu principal...');
    } else if (opcao == '6') {
        console.log('======================================================');
        console.log('              EDITAR META ANUAL DA EMPRESA            ');
        console.log('======================================================\n');
        console.log('📝 Por favor, insira a nova meta anual da empresa:');
        console.log('-----------------------------------------------\n');
         
        var i = 1;
        for ( i; i <= 12; i++) {
            var meta = parseFloat(readlineSync.question(`📌 Meta do mês ${i}: R$ `));
            empresa.meta_anual.push(meta);
        }
        console.log(`
            Meta Anual Atualizada: ${empresa.meta_anual}
        `);
        console.log('\nMeta anual atualizada com sucesso!\n');
        console.log('======================================================\n');
        var voltarMenu = readlineSync.question('➤ Pressione ENTER para voltar ao menu principal...');
    } else if (opcao == '7') {
        console.log('======================================================');
        console.log('           EDITAR ÁREAS DE ATUAÇÃO DA EMPRESA         ');
        console.log('======================================================\n');
        console.log('📝 Por favor, insira as áreas de atuação da empresa:');
        console.log('-----------------------------------------------\n');
        
        var area = 1;
        for (area; area <=4; area++) {
            var nova_area = readlineSync.question(`📌 Área de atuação ${area}: `);
            empresa.areas_atuacao.push(nova_area);
        }
        console.log(`
            Áreas de Atuação Atualizadas: ${empresa.areas_atuacao}
        `);
        console.log('\nÁreas de atuação atualizadas com sucesso!\n');
        console.log('======================================================\n');
        var voltarMenu = readlineSync.question('➤ Pressione ENTER para voltar ao menu principal...');
    } else if (opcao == '8') {
            console.log('======================================================');
            console.log('          EXIBIR INFORMAÇÕES DA EMPRESA               ');
            console.log('======================================================\n');
            console.log('🏢 INFORMAÇÕES DA EMPRESA:');
            console.log('-----------------------------------------------\n');
            console.log('🔖  Nome da Empresa: Aurora Tech Solutions');
            console.log('🔖  Razão Social: Aurora Sistemas Inteligentes S.A.')
            console.log('🔖  CNPJ: 12.345.678/0001-90')
            console.log('🔖  Inscrição Estadual: 123.456.789.000')
            console.log('🔖  Data de Fundação: 01/04/2012')
            console.log('------------------------------------------------\n');
            console.log('🦺  ÁREAS DE ATUAÇÃO:\n');
            console.log('✔️ Desenvolvimento de Softwares \n ✔️ Inteligência Artificial\n ✔️ Soluções em Automação\n ✔️ Consultoria Tecnológica\n');
            console.log('------------------------------------------------\n');
            console.log('🎯  META ANUAL:\n');
            console.log('✔️ Janeiro: R$ 150.000,00\n ✔️ Fevereiro: R$ 180.000,00\n ✔️ Março: R$ 200.000,00\n ✔️ Abril: R$ 220.000,00\n ✔️ Maio: R$ 250.000,00\n ✔️ Junho: R$ 300.000,00\n ✔️ Julho: R$ 350.000,00\n ✔️ Agosto: R$ 400.000,00\n ✔️ Setembro: R$ 450.000,00\n ✔️ Outubro: R$ 500.000,00\n ✔️ Novembro: R$ 600.000,00\n ✔️ Dezembro: R$ 700.000,00\n');
            console.log('-------------------------------------------------\n');
            console.log(' Total Anual: R$ 4.100.000,00\n');
            console.log('📌 ENDEREÇO:')
            console.log('✔️ Logradouro: Av. das Nações Unidas\n ✔️ Número: 5000\n ✔️ Complemento: Torre B, 10º Andar\n ✔️ Bairro: Centro Empresarial\n ✔️ Cidade: São Paulo\n ✔️ Estado: SP\n ✔️ CEP: 04578-000\n');
            console.log('-------------------------------------------------\n');
            console.log('📞 CONTATO:')
            console.log('✔️ Telefone: (11) 4002-8922\n ✔️ Email: contato@auroratech.com.br\n');
            console.log('✔️ Site: www.auroratech.com.br\n');
            console.log('======================================================\n');
            var voltarMenu = readlineSync.question('Pressione ENTER para voltar ao menu principal...');
    } else if (opcao == '9') {
        console.log('======================================================');
        console.log('         ADICIONAR FUNCIONÁRIO À EMPRESA             ');
        console.log('======================================================\n');
        console.log('📝 Por favor, insira os dados do novo funcionário:');
        console.log('------------------------------------------------------\n')

        var novoFuncionario = {};
        novoFuncionario.nome = readlineSync.question('➤ Nome: ');
        novoFuncionario.cpf = readlineSync.question('➤ CPF: ');
        novoFuncionario.genero = readlineSync.question('➤ Gênero: ');
        novoFuncionario.estadoCivil = readlineSync.question('➤ Estado Civil: ');
        novoFuncionario.idade = readlineSync.question('➤ Idade: ');
        novoFuncionario.salarioBruto = readlineSync.question('➤ Salário Bruto: ');

        empresa.funcionarios.push(novoFuncionario);

        console.log('\nFuncionário cadastrado com sucesso!');
        console.log('======================================================\n');
        var voltarMenu = readlineSync.question('➤ Pressione ENTER para voltar ao menu principal...');

    } else if (opcao == '10') {
        console.log('======================================================');
        console.log('           QUADRO ATUAL DE FUNCIONÁRIOS               ');
        console.log('======================================================\n');

        var total = empresa.funcionarios.length;
        if (total === 0) {
            console.log('Nenhum funcionário cadastrado.');
        } else {
            console.log(`⚙️  Quantidade total de funcionários cadastrados: ----- ${total}`);
            
            var primeiro = empresa.funcionarios[0];
            var ultimo = empresa.funcionarios[total - 1];
            console.log(` 1️⃣  Primeiro funcionário da lista: ----- ${primeiro.nome}`);
            console.log(`*️⃣  Último funcionário da lista: ----- ${ultimo.nome}`);

            console.log('\n👨‍💼  LISTA COMPLETA DE FUNCIONÁRIOS:');
            
            empresa.funcionarios.forEach(function(func, idx) {
                console.log(`${idx + 1}. ${func.nome} \n ▶️  CPF: ${func.cpf} \n ▶️  Idade: ${func.idade} \n ▶️  Salário Bruto: R$ ${Number(func.salarioBruto).toFixed(2)}`);
            });
        }

        console.log('\n======================================================\n');
        var voltarMenu = readlineSync.question('➤ Pressione ENTER para voltar ao menu principal...');
    } else if (opcao == '11') {
        console.log('======================================================');
        console.log('           --- FOLHA DE PAGAMENTO ATUAL ---           ');
        console.log('======================================================\n');

        var data_atual = new Date().toLocaleDateString();

        if (empresa.funcionarios.length === 0) {
            console.log('Nenhum funcionário cadastrado.\n');
        } else {
            empresa.funcionarios.forEach(function(func, idx) {
                var salarioBruto = Number(func.salarioBruto) || 0;
                var descontoINSS = require('./utils/inss').calcularINSS(salarioBruto);
                var descontoIRRF = require('./utils/imposto_renda').calcularImpostoRenda(salarioBruto);
                var salarioLiquido = require('./utils/salario_liquido').calcularSalarioLiquido(salarioBruto);
                var fgts = require('./utils/fgts').calcularFGTS(salarioBruto);
                var ferias = require('./utils/salario_ferias').calcularSalarioFerias(salarioBruto);

                console.log(`${idx + 1}. 👤 ${func.nome} `);
                console.log('');
                console.log(`   💚 Salário Bruto: R$ ${salarioBruto.toFixed(2)}`);
                console.log(`   💔 Desconto INSS: R$ ${descontoINSS.toFixed(2)}`);
                console.log(`   💔 Desconto IRRF: R$ ${descontoIRRF.toFixed(2)}`);
                console.log('--------------------------------------------------');
                console.log(`   💰 Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`);
                console.log(`   🏦 FGTS (8%): R$ ${fgts.toFixed(2)}`);
                console.log(`   🏖️ Férias (Direito): R$ ${ferias.toFixed(2)}`);
                console.log('');
                console.log('.......................................................................\n');
            });
        }

        console.log('🔖  Empresa: ' + (empresa.nome || '---') + '  |  CNPJ: ' + (empresa.cnpj || '---') + '  |  Data: ' + data_atual);
        console.log('\n.......................................................................\n');
        var voltarMenu = readlineSync.question('➤ Pressione ENTER para voltar ao menu principal...');
    }

    }
        
    
