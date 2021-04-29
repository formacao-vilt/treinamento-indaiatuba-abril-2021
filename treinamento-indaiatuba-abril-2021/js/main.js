// function validar() {
//     var nome = document.getElementById("nome");
//     var cpf = document.getElementById("cpf");
//     var email = document.getElementById("email");
//     var data = document.getElementById("data");
//     var celular = document.getElementById("celular");
//     var sexo = document.getElementById("sexo");
//     var styles = { border: "2px solid red" }
//     var msg = "Por favor preencha o(s) campo(s) abaixo:\n\n";

//     if (nome.value == "") {
//         msg += "- Nome completo\n";
//         nome.style.outline = "2px solid red"
//     }
//     if (cpf.value == "") {
//         msg += "- CPF\n";
//         cpf.style.outline = "2px solid red"
//     }
//     if (data.value == "") {
//         msg += "- Nascimento\n";
//         data.style.outline = "2px solid red"
//     }
//     if (sexo.value == "") {
//         msg += "- Sexo\n";
//         sexo.style.outline = "2px solid red"
//     }
//     if (email.value == "") {
//         msg += "- Email\n";
//         email.style.outline = "2px solid red"
//     }
//     if (celular.value == "") {
//         msg += "- Celular\n";
//         celular.style.outline = "2px solid red"
//     }
//     if (nivel.value == "") {
//         msg += "- Nível\n";
//         nivel.style.outline = "2px solid red"
//     }
//     if (media.value == "") {
//         msg += "- Média\n";
//         media.style.outline = "2px solid red"
//     }

//     alert(msg);

// }
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()