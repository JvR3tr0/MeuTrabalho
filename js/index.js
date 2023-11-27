
function registro(){
// Obtenha todos os dados de cadastro do usuário do documento.html
//var nome = document.getElementById("nome").value;
//var sobrenome = document.getElementById("sobrenome").value;
var email = document.getElementById("email").value;
var senha = document.getElementById("senha").value;
//var endereco = document.getElementById("endereco").value;
//var cidade = document.getElementById("cidade").value;
//var estado = document.getElementById("estado").value;
//var cep = document.getElementById("cep").value;

// Armazene todos os dados de cadastro em um objeto JSON
var dadosCadastro = {
  //"nome": nome,
  //"sobrenome": sobrenome,
  "email": email,
  "senha": senha,
  //"endereco": endereco,
  //"cidade": cidade,
  //"estado": estado,
  //"cep": cep
}

localStorage.setItem("dadosCadastro", JSON.stringify(dadosCadastro));
}
