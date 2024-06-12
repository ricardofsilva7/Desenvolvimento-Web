var ultimoID = 0;

function adicionar_usuario()
{
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var sexo = document.getElementById("sexo").value;
    //Auto encremento ID
    ultimoID++;

    //Comandos para cadastro de tabela
    var tabela = "<table border='1'>";
        tabela += "<tr>";
        tabela += "<td>ID</td>";
        tabela += "<td>Nome</td>";
        tabela += "<td>Idade</td>";
        tabela += "<td>Sexo</td>";
        tabela += "<td>Ações</td>"; 
        tabela += "</tr>";
        tabela += "<tr>";
        tabela += "<td>"+ ultimoID +"</td>";
        tabela += "<td>" + nome + "</td>";
        tabela += "<td>" + idade + "</td>";
        tabela += "<td>" + sexo + "</td>";
        tabela += "<td><button onclick='editar_usuario(this.parentNode.parentNode)'>Editar</button><button onclick='excluir_usuario(this.parentNode.parentNode)'>Excluir</button></td>";
        tabela += "</tr>";
        tabela += "</table>";

        
   //CRIA UM 'FILHO' PARA PODER ADICIONAR OS VALORES NA TABELA
    var divTabela = document.createElement("div");
    divTabela.innerHTML = tabela;
    document.getElementById("tabela").innerHTML = "";
    document.getElementById("tabela").appendChild(divTabela);
    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("sexo").value = "";
}

//função para excluir a linha
function excluir_usuario(exclui)
{
    var tabelaexcluir = exclui.tagName.toLowerCase() === "tr" ? exclui : exclui.parentNode;
    tabelaexcluir.parentNode.parentNode.removeChild(tabelaexcluir.parentNode);
}

// Função para exclui a linha especifica e substitui após edição.
function editar_usuario(renomeia)
{
    var celulas = renomeia.getElementsByTagName("td");
    var nome = celulas[1].innerText;
    var idade = celulas[2].innerText;
    var sexo = celulas[3].innerText;
    
    document.getElementById("nome").value = nome;
    document.getElementById("idade").value = idade;
    document.getElementById("sexo").value = sexo;

    renomeia.parentNode.removeChild(renomeia);
}
