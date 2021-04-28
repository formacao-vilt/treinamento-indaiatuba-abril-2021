function validar() {

    let nome = document.getElementById('nome')
    let cpf = document.getElementById('cpf')
    let data = document.getElementById('data')
    let sexo = document.getElementById('sexo')
    let email = document.getElementById('email')
    let celular = document.getElementById('celular')
    let nivel = document.getElementById('nivel')
    let media = document.getElementById('media')
    
    let message = "Por favor preencha os campos abaixo:\n\n";

    if (!nome.value) {  
        nome.style.outline = '2px solid red'
        message += "Nome \n";
    }

    if (!cpf.value) {  
        cpf.style.outline = '2px solid red'
        message += "CPF \n";
    }

    if (!data.value) {  
        data.style.outline = '2px solid red'
        message += "Data \n";
    }
    if (!sexo.value) {  
        sexo.style.outline = '2px solid red'
        message += "Sexo \n";
    }

    if (!email.value) {  
        email.style.outline = '2px solid red'
        message += "E-mail \n";
    }

    if (!celular.value) {  
        celular.style.outline = '2px solid red'
        message += "Celular \n";
    }
    if (!nivel.value) {  
        nivel.style.outline = '2px solid red'
        message += "Nível \n";
    }

    if (!media.value) {  
        media.style.outline = '2px solid red'
        message += "Media \n";
    }

    alert(message)
}