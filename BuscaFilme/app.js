function buscarFilme() {
  let filme = document.getElementById("input_filme").value;
  apiGet(filme);
  let divResultados = document.querySelector('.resultados');
  let divNotas = document.querySelector('.nota');
  divResultados.style.display = 'flex';
  divNotas.style.display = 'flex';
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
  document.getElementById("ano").innerHTML = `<strong>Ano:</strong> ${resposta.Year}`;
  document.getElementById("diretor").innerHTML = `<strong>Diretor:</strong> ${resposta.Director}`;
  document.getElementById("genero").innerHTML = `<strong>Genero:</strong> ${resposta.Genre}`;
  document.getElementById("nota").innerHTML = `<strong>Nota:</strong> ${resposta.imdbRating}/10`;

}
