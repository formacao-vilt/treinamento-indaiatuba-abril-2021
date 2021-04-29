function validar() {
  var nome = document.getElementById("nome");
  var cpf = document.getElementById("cpf");
  var email = document.getElementById("email");
  var data = document.getElementById("data");
  var celular = document.getElementById("celular");
  var sexo = document.getElementById("sexo");
  var styles = { border: "2px solid red" }

  if (nome.value != "" && cpf.value != "" && data.value != "" && 
  sexo.value != "" && email.value != "" && celular.value != "" && 
  nivel.value != "" && media.value != "") {
    alert("Cadastro concluido!");
    var tabela = document.getElementById("tabela");
    var linha = '<tr><td>' + nome.value + '</td><td>' + cpf.value + '</td><td>' + data.value + '</td><td>' + sexo.value + '</td><td>' + email.value + 
    '</td><td>' + celular.value + '</td><td>' + nivel.value + '</td><td>' + media.value + '</td></tr>'
    tabela.innerHTML += linha;
  } else{
    alert("Preencha todos os campos!");
  }
}
