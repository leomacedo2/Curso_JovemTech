async function buscarFuncionario(){
    const matricula = document.getElementById('input_matricula').value

    const dados = await fetch(`http://localhost:3000/funcionarios/${matricula}`);
    const resposta = await dados.json()

    console.log(resposta)

    document.getElementById('nome').value = resposta.idMatricula.nome
    document.getElementById('setor').value = resposta.idMatricula.setor
    document.getElementById('cargo').value = resposta.idMatricula.cargo
    document.getElementById('salario').value = resposta.idMatricula.salario
    document.getElementById('idade').value = resposta.idMatricula.idade
}