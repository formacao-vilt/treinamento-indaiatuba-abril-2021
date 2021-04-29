export default function InitValidar() {
  const form = document.getElementById("cadastro");
  const nome = document.getElementById("nome");
  const cpf = document.getElementById("cpf");
  const data = document.getElementById("data");
  const sexo = document.getElementById("sexo");
  const email = document.getElementById("email");
  const celular = document.getElementById("celular");
  const nivel = document.getElementById("nivel");
  const media = document.getElementById("media");
  const errorElement = document.getElementById("error");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let msg = [];

    const reg = {
      emailRegex: new RegExp(
        "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
      ),
      cpfRegex: new RegExp("^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}"),
    };

    const msgError = {
      nome: "Nome é obrigatório e deve ter no minimo 3 caracteres",
      cpf: "CPF invalido ou não preenchido",
      email: "E-mail Invalido ou não preenchido",
      data: "Data de Nascimento é obrigatório",
      sexo: "Sexo é obrigatório",
      celular: "Celular é obrigatório",
      nivel: "Nível é obrigatório",
      media: "Média é obrigatório",
    };

    if (nome.value.length < 3) msg.push(msgError.nome);
    if (
      cpf.value == "" ||
      cpf.value.replace(/[^\d]+/g, "").length > 11 ||
      !reg.cpfRegex.test(cpf.value)
    )
      msg.push(msgError.cpf);

    if (email.value == "" || !reg.emailRegex.test(email.value))
      msg.push(msgError.email);
    if (data.value == "") msg.push(msgError.data);
    if (sexo.value == "") msg.push(msgError.sexo);
    if (celular.value == "") msg.push(msgError.celular);
    if (nivel.value == "") msg.push(msgError.nivel);
    if (media.value == "") msg.push(msgError.media);

    if (msg.length > 0) errorElement.innerText = msg.join(",\n");
    else {
      errorElement.innerText = "";
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          title: email.value,
        }),
      });
    }
  });
}
