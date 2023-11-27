function mostrar(){

var dadosCadastroArmazenados = JSON.parse(localStorage.getItem("dadosCadastro"));

document.write("<h1>Email: " + dadosCadastroArmazenados.email + "</h1>");
document.write("<h1>Senha: " + dadosCadastroArmazenados.senha + "</h1>");



var button = document.createElement("button");

var text = document.createTextNode("Clique aqui");
button.appendChild(text);

document.body.appendChild(button);

button.onclick = function() {
    mostrar();
  };
}
