export default function InitValidarTest() {
  const form = document.getElementById("cadastro");
  const values = form.querySelectorAll("input, select");

  const errorElement = document.getElementById("error");

  const json = [
    {
      id: "nome",
      min: 3,
      max: 50,
    },
    {
      id: "cpf",
      min: 1,
      max: 11,
    },
    {
      id: "data",
      min: 1,
      max: 10,
    },
    {
      id: "sexo",
      min: 1,
      max: 10,
    },
    {
      id: "email",
      min: 1,
      max: 50,
    },
    {
      id: "celular",
      min: 1,
      max: 20,
    },
    {
      id: "nivel",
      min: 1,
      max: 20,
    },
    {
      id: "media",
      min: 1,
      max: 2,
    },
  ];

 form.addEventListener("submit", (e) => {
  e.preventDefault()
  let messages = [];
  json.forEach(a =>  {
    console.log(a);
    values.forEach(b => {
    console.log(a);

      if(true) {
        messages.push(`${b.id}`)
      }
    })
  })

 })



}
