function validar(){
    var nome = document.getElementById("nome");
    var cpf = document.getElementById("cpf");
    var data = document.getElementById("data");
    var sexo = document.getElementById("sexo");
    var email = document.getElementById("email");
    var celular = document.getElementById("celular");
    var nivel = document.getElementById("nivel");
    var media= document.getElementById("media");

    if(nome.value == ""){
        document.getElementById("nome").style.border = "2px solid #ef3c59"; 
    }
    if(cpf.value == ""){
        document.getElementById("cpf").style.border = "2px solid #ef3c59"; 
    }
    if(data.value == ""){ 
        document.getElementById("data").style.border = "2px solid #ef3c59"; 
    }
    if(sexo.value == ""){
        document.getElementById("sexo").style.border = "2px solid #ef3c59"; 
    }
    if(email.value == ""){
        document.getElementById("email").style.border = "2px solid #ef3c59"; 
    }
    if(celular.value == ""){ 
        document.getElementById("celular").style.border = "2px solid #ef3c59"; 
    }
    if(nivel.value == ""){  
        document.getElementById("nivel").style.border = "2px solid #ef3c59"; 
    }
    if(media.value == ""){  
        document.getElementById("media").style.border = "2px solid #ef3c59"; 
    }
    alert("Preencha os campos em vermelho!")
}
