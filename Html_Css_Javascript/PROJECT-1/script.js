function login() {
  const email = document.getElementById("input-email").value;
  const senha = document.getElementById("input-senha").value;

  console.log(email, senha);

  if (email === "" || senha === "") {
    alert("Preencha todos os campos");
    return;
  }

  if (senha.length < 6) {
    alert("Senha precisa ter no minimo 6 caracteres");
    return;
  }

  if (email === "admin@email.com" && senha === "123456") {
    window.location.href = "formulario.html";
    return;
  } else {
    alert("Credenciais inválidas");
    return;
  }
}

const form = document.getElementById('myform')

// Chamada de função anonima 
// addeventListener é um metodo e a sintaxe é escutar alguma coisa para realizar uma ação

form.addEventListener('submit' , event => {
        event.preventDefault()
    cadastrar()
})

function cadastrar() {
    const nome = document.getElementById("nome-aluno").value;
    const sobrenome = document.getElementById("sobrenome-aluno").value;
    const email = document.getElementById("email-aluno").value;
    const idade = document.getElementById("idade-aluno").value;
    const escolaridade = document.getElementById("escolaridade").value;
    const sexoSelecionado = document.querySelector("input[name='sexo']:checked")
    const turnoSelecionado = document.querySelectorAll("input[name='turno']:checked")
    
    if(nome==="" || sobrenome==="" || email==="" || idade==="" || escolaridade===""){
        alert("Preencha todos os campos")
        return
    }

    if (!sexoSelecionado){
        alert("Escolha um sexo")
        return
    }

    if (turnoSelecionado.length === 0){
        alert("Escolha pelo menos um turno")
        return
    }

}
