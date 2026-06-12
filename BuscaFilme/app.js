function buscarFilme() {
  let filme = document.getElementById("input_filme").value;
  apiGet(filme);
}

async function apiGet(filme) {

  let dados = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=716d6f4a&t=${filme}`
  );

  let resposta = await dados.json();

  apresentarDados(resposta);
}

function apresentarDados(resposta) {
  document.getElementById("poster").src = resposta.Poster;

  document.getElementById("titulo").innerHTML = resposta.Title;

  document.getElementById("descricao").innerHTML = resposta.Plot;
}
