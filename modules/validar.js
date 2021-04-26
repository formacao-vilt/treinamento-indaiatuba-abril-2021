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

  form.addEventListener("submit", e => {
    e.preventDefault()
    let msg = [];
    const emailRegex = new RegExp(
      "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
    );
    const cpfRegex = new RegExp("^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}");
  
    if (nome.value === "" || nome.value.length < 3) msg.push("Nome é obrigatório e deve ter no minimo 3 caracteres");
    if (
      cpf.value === "" ||
      cpf.value.replace(/[^\d]+/g, "").length > 11 ||
      !cpfRegex.test(cpf.value)
    ) msg.push("CPF invalido ou não preenchido");
    if (email.value === "" || !emailRegex.test(email.value)) msg.push("E-mail Invalido ou não preenchido");
    if (data.value === "") msg.push("Data de Nascimento é obrigatório");
    if (sexo.value === "") msg.push("Sexo é obrigatório");
    if (celular.value === "") msg.push("Celular é obrigatório");
    if (nivel.value === "") msg.push("Nível é obrigatório");
    if (media.value === "") msg.push("Média é obrigatório");

    if (msg.length > 0) errorElement.innerText = msg.join(",\n") 
    else {
      errorElement.innerText = "";
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: email.value
        })
      });
      
    }
  })
}
