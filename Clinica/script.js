async function carregarLista() {
  // Localizar minha lista ordenada
  const listap = document.getElementById("lista-pacientes");
  const listam = document.getElementById("lista-medicos");

  if (listap) {
    const dados = await fetch(
      "https://6a38580d64a2d82692227a6b.mockapi.io/clinica/v1/pacientes",
    ).then((response) => response.json());

    dados.forEach((x) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>Nome:</strong> ${x.nome}<br>
        <strong>Cpf:</strong> ${x.cpf}<br>
        <strong>Convenio:</strong> ${x.convenio}
        `;
      listap.appendChild(li);
    });
  }

  if (listam) {
    const dados = await fetch(
      "https://6a38580d64a2d82692227a6b.mockapi.io/clinica/v1/medicos",
    ).then((response) => response.json());

    dados.forEach((y) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>Nome:</strong> ${y.nome}<br>
        <strong>CRM:</strong> ${y.crm}<br>
        <strong>Especialidade:</strong> ${y.especialidade}
        `;
      listam.appendChild(li);
    });
  }
}

async function pesquisarPaciente() {
  const nomePesquisado = document.getElementById("input-paciente").value;

  if (nomePesquisado == "") {
    alert("Por favor, digite um nome para pesquisar!");
    return;
  }

  const dados = await fetch(
    `https://6a38580d64a2d82692227a6b.mockapi.io/clinica/v1/pacientes?nome=${nomePesquisado}`
  ).then((response) => response.json());

    const paciente = dados[0];
    document.getElementById("nome-paciente").innerHTML = `<strong>Nome: </strong> ${paciente.nome}`;
    document.getElementById("nome-convenio").innerHTML = `<strong>Convenio: </strong> ${paciente.convenio}`;

}

async function pesquisarMedico() {
  const nomePesquisado = document.getElementById("input-medico").value;

  if (nomePesquisado == "") {
    alert("Por favor, digite um nome para pesquisar!");
    return;
  }

  const dados = await fetch(
    `https://6a38580d64a2d82692227a6b.mockapi.io/clinica/v1/medicos?nome=${nomePesquisado}`
  ).then((response) => response.json());

    const medico = dados[0];
    document.getElementById("nome-medico").innerHTML = `<strong>Nome: </strong> ${medico.nome}`;
    document.getElementById("nome-especialidade").innerHTML = `<strong>Especialidade: </strong> ${medico.especialidade}`;
}

carregarLista();
