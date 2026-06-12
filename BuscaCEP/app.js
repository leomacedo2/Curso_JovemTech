function buscarCep(){
    let cep = document.getElementById('input-cep').value;
    apiGet(cep)
}

async function apiGet(cep) {
    let dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    let resposta = await dados.json();
    apresentarDados(resposta, uf)

}

function apresentarDados(resposta) {
    document.getElementById('input-uf').innerHTML = resposta.uf
    document.getElementById('input-cidade').innerHTML = resposta.localidade
    document.getElementById('input-bairro').innerHTML = resposta.bairro
    document.getElementById('input-logradouro').innerHTML = resposta.logradouro
    document.getElementById('input-regiao').innerHTML = resposta.regiao

}