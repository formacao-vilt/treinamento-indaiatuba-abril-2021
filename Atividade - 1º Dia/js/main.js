var nome = document.getElementById('nome')
var cpf = document.getElementById('cpf')
var data = document.getElementById('data')
var sexo = document.getElementById('sexo')
var email = document.getElementById('email')
var celular = document.getElementById('celular')
var nivel = document.getElementById('nivel')
var media = document.getElementById('media')



function validar() {
    if (nome.value == '') {
        nome.style.outline = 'solid 1px red'
    }
    else {
        nome.style.outline = null
    }
    if (data.value == '') {
        data.style.outline = 'solid 1px red'
    }
    else {
        data.style.outline = null
    }
    if (sexo.value == '') {
        sexo.style.outline = 'solid 1px red'
    }
    else {
        sexo.style.outline = null
    }
    if (cpf.value == '') {
        cpf.style.outline = 'solid 1px red'
    }
    else {
        cpf.style.outline = null
    }
    if (email.value == '') {
        email.style.outline = 'solid 1px red'
    }
    else{
        email.style.outline=null
    }
    if (celular.value == '') {
        celular.style.outline = 'solid 1px red'
    }
    else{
            celular.style.outline=null
        }
    if (nivel.value == '') {
        nivel.style.outline = 'solid 1px red'
    }
    else{
        nivel.style.outline=null
    }
    if (media.value.length == 0) {
        media.style.outline= 'solid 0.1px red'
    }
    else{
        media.style.outline=null
    }
    
}