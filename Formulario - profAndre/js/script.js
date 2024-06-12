const squadForm = document.getElementById("squadForm");
const squadTable = document.getElementById("squadTable");
const squadButton = document.getElementById("squadSave");

squadForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const squadName = document.getElementById("squadName").value;
    const squadLeader = document.getElementById("squadLeader").value;
    const squadMembers = document.getElementById("squadMembers").value;

    if (squadButton.textContent == "Salvar Alterações") {
        if(event.submitter.textContent != "Cancelar")
        {
            const row = document.getElementById("squadRow").value;

            squadTable.rows[row].cells[0].textContent = squadName;
            squadTable.rows[row].cells[1].textContent = squadLeader;
            squadTable.rows[row].cells[2].textContent = squadMembers;
        } 

        squadButton.textContent = "Cadastrar Squad";
        document.getElementById("squadCancel").remove();

        document.getElementById("squadRow").value = "";
        squadForm.reset();
        return;
    }

    const newRow = document.createElement("tr");

    const tdName = document.createElement("td");
    const tdLeader = document.createElement("td");
    const tdMembers = document.createElement("td");

    tdName.appendChild(document.createTextNode(squadName));
    tdLeader.appendChild(document.createTextNode(squadLeader));
    tdMembers.appendChild(document.createTextNode(squadMembers));

    newRow.appendChild(tdName);
    newRow.appendChild(tdLeader);
    newRow.appendChild(tdMembers);

    const tdAction = document.createElement("td");

    const btEdit = document.createElement("button")
    btEdit.textContent = "Editar";
    btEdit.addEventListener("click", function () {
        const row = this.closest("tr").rowIndex;
        const squadName = squadTable.rows[row].cells[0].textContent;
        const squadLeader = squadTable.rows[row].cells[1].textContent;
        const squadMembers = squadTable.rows[row].cells[2].textContent;

        document.getElementById("squadName").value = squadName;
        document.getElementById("squadLeader").value = squadLeader;
        document.getElementById("squadMembers").value = squadMembers;

        if (document.getElementById("squadRow").value == "") {
            const btCancel = document.createElement("button")
            btCancel.textContent = "Cancelar";
            btCancel.id = "squadCancel";
            squadForm.appendChild(btCancel);
        }

        document.getElementById("squadRow").value = row;
        squadButton.textContent = "Salvar Alterações";
    })
    
    const btDelete = document.createElement("button")
    btDelete.textContent = "Remover";
    btDelete.addEventListener("click", function () {
        if (confirm("Confirma a exclusão do cadastro desta SQUAD?")) {
            squadTable.deleteRow(this.closest("tr").rowIndex);
        }
    });

    tdAction.appendChild(btEdit);
    tdAction.appendChild(btDelete);

    newRow.appendChild(tdAction);

    squadTable.appendChild(newRow);

    squadForm.reset();
})