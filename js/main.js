function validar() {
  var nome = document.getElementById("nome");
  var cpf = document.getElementById("cpf");
  var email = document.getElementById("email");
  var data = document.getElementById("data");
  var celular = document.getElementById("celular");
  var sexo = document.getElementById("sexo");
  var styles = { border: "2px solid red" }
  var msg = "Por favor preencha o(s) campo(s) abaixo:\n\n";

  if (nome.value == "") {
    msg += "- Nome completo\n";
    nome.style.outline = "2px solid red"
  }
  else {
    nome.style.outline = ""
  }

  if (cpf.value == "") {
    msg += "- CPF\n";
    cpf.style.outline = "2px solid red"
  }
  else {
    cpf.style.outline = ""
  }

  if (data.value == "") {
    msg += "- Nascimento\n";
    data.style.outline = "2px solid red"
  }
  else {
    data.style.outline = ""
  }

  if (sexo.value == "") {
    msg += "- Sexo\n";
    sexo.style.outline = "2px solid red"
  }
  else {
    sexo.style.outline = ""
  }

  if (email.value == "") {
    msg += "- Email\n";
    email.style.outline = "2px solid red"
  }
  else {
    email.style.outline = ""
  }

  if (celular.value == "") {
    msg += "- Celular\n";
    celular.style.outline = "2px solid red"
  }
  else {
    celular.style.outline = ""
  }

  if (nivel.value == "") {
    msg += "- Nível\n";
    nivel.style.outline = "2px solid red"
  }
  else {
    nivel.style.outline = ""
  }

  if (media.value == "") {
    msg += "- Média\n";
    media.style.outline = "2px solid red"
  }
  else {
    media.style.outline = ""
  }

  alert(msg);

}