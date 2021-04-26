export default function InitValidarTest() {
  const form = document.getElementById('cadastro')
  const values = form.querySelectorAll("input, select");

  const errorElement = document.getElementById('error')



  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let messages = [];

    values.forEach(input => {
        switch(input.id) {
          case "nome": 
            input.value.length < 3 ? messages.push('Nome é obrigatório e deve ter no minimo 3 caracteres') : ""
          break;
          case "cpf":
            const cpfRegex = new RegExp("^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}");
            cpf.value.replace(/[^\d]+/g,'').length > 11 || !cpfRegex.test(cpf.value) ? messages.push("CPF invalido ou não preenchido") : ""
          break;
          case "email":
            const emailRegex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
            !emailRegex.test(email.value) ? messages.push("E-mail Invalido ou não preenchido") : ""
          break;
          case "data": data.value === '' ? messages.push("Data de Nascimento é obrigatório") : ""
          break;
          case "sexo": sexo.value === '' ? messages.push("Sexo é obrigatório") : ""
          break;
          case "celular": celular.value === '' ? messages.push("Celular é obrigatório") : ""
          break;
          case "nivel": nivel.value === '' ? messages.push("Nível é obrigatório") : ""
          break;
          case "media": media.value === '' ? messages.push("Média é obrigatório") : ""
          break;

        }
    })
    if(messages.length > 0)errorElement.innerText = messages.join(",\n") 
    else errorElement.innerText = "";
  })

} 

