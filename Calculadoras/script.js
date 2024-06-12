function mostrarCalculadoraINSS() {
    document.getElementById('conteudo').innerHTML = `
        <h2>Calculadora INSS</h2>
        <label for="salario">Salário:</label>
        <input type="number" id="salario" placeholder="Digite o salário"><br><br>
        <label for="dependentes">Dependentes:</label>
        <input type="number" id="dependentes" value="0" min="0"><br><br>
        <button onclick="calcularINSS()">Calcular</button><br><br>
        <div id="resultadoINSS" class="resultado"></div>
        <div id="resultadoIRPF" class="resultado"></div>
    `;
}

var numDependentes = 0;

function adicionarDependentes() {
    numDependentes = parseInt(document.getElementById('dependentes').value);
    document.getElementById('dependentes').value = numDependentes + 1;
}

function calcularINSS() {
    // Obter o valor do salário digitado pelo usuário
    var salario = parseFloat(document.getElementById('salario').value);

    // Variáveis para armazenar o valor do INSS e a alíquota
    var inss;
    var aliquota;
    var irpf;
    var impostoRenda;

    // Verificar se há desconto para quem tem filhos
    var temDependentes = numDependentes > 0;

    // Aplicar as alíquotas de acordo com a faixa salarial do INSS
    if (salario <= 1045) {
        aliquota = 0.075; // 7.5%
    } else if (salario <= 2089.6) {
        aliquota = 0.09; // 9%
    } else if (salario <= 3134.4) {
        aliquota = 0.12; // 12%
    } else if (salario <= 6101.06) {
        aliquota = 0.14; // 14%
    } else {
        aliquota = 0.14; // Até o teto máximo
    }
    
    // Aplicar as alíquotas de acordo com a faixa salarial do IRPF
    if (salario <= 2259) {
        irpf = 0;
    } else if (salario <= 2828.66) {
        irpf = 0.075; // 7.5%
    } else if (salario <= 3751.06) {
        irpf = 0.15; // 15%
    } else if (salario <= 4664.68) {
        irpf = 0.225; // 22.5%
    } else {
        irpf = 0.275; // 27.5%
    }

    // Aplicar desconto para quem tem dependentes
    var descontoDependentes = temDependentes ? 189.59 * numDependentes : 0;

    // Calcular o valor do INSS
    inss = salario * aliquota - descontoDependentes;

    // Calcular o valor do Imposto de Renda
    impostoRenda = salario * irpf;

    // Exibir os resultados na página
    document.getElementById('resultadoINSS').innerHTML = `<p>O valor do INSS é: R$ ${inss.toFixed(2)} (alíquota ${(aliquota * 100).toFixed(2)}%)</p>`;
    document.getElementById('resultadoIRPF').innerHTML = `<p>O valor do IRPF é: R$ ${impostoRenda.toFixed(2)} (alíquota ${(irpf * 100).toFixed(2)}%)</p>`;
}

function mostrarCalculadoraMatematica() {
    fetch('calculadora.html')
    .then(response => {
        console.log(response);
        return response.text();
    })
    .then(html => {
        console.log(html);
        document.getElementById('conteudo').innerHTML = html;
    })
    .catch(error => console.error('Erro ao carregar a calculadora matemática:', error));
    
}

function mostrarCompilador() {
    document.getElementById('conteudo').innerHTML = "<h2>Compilador</h2><p>Aqui está o compilador.</p>";
}
