function validar() {
    var nome = document.getElementById("nome");
    var cpf = document.getElementById("cpf");
    var email = document.getElementById("email");
    var data = document.getElementById("data");
    var celular = document.getElementById("celular");
    var sexo = document.getElementById("sexo");
    const bg_danger = '#dc3546';
    var styles = { border: `2px solid ${bg_danger}` }

    var msg = "Por favor preencha o(s) campo(s) abaixo:\n\n";

    if (nome.value == "") {
        msg += "- Nome completo\n";
        nome.style.outline = styles
    }
    if (cpf.value == "") {
        msg += "- CPF\n";
        cpf.style.outline = styles
    }
    if (data.value == "") {
        msg += "- Nascimento\n";
        data.style.outline = styles
    }
    if (sexo.value == "") {
        msg += "- Sexo\n";
        sexo.style.outline = styles
    }
    if (email.value == "") {
        msg += "- Email\n";
        email.style.outline = styles
    }
    if (celular.value == "") {
        msg += "- Celular\n";
        celular.style.outline = styles
    }
    if (nivel.value == "") {
        msg += "- Nível\n";
        nivel.style.outline = styles
    }
    if (media.value == "") {
        msg += "- Média\n";
        media.style.outline = styles
    }

    alert(msg);

}

//remove a mascara do cpf quando o usuario foca no campo
function handleRemoveMask() {
    const value = document.getElementById('cpf').value;
    if (value.length >= 1) {
        let aux = value.split('.').join('');
        aux = aux.split('-').join('');
        const formatted_cpf = aux.split('/').join('');
        return document.getElementById('cpf').value = formatted_cpf;
    }
}

//coloca a mascara no cpf depois de do usuario tirar o foco do campo
async function handlemask() {
    const value = document.getElementById('cpf').value;
    if (value.length >= 1) {
        let aux = value.split('.').join('');
        aux = aux.split('-').join('');
        const clearValue = aux.split('/').join('');
        if (clearValue.length === 11) {
            let fistPart = `${clearValue.slice(0, 3)}.`
            let secunfPart = `${clearValue.slice(3, 6)}.`
            let thirdPart = `${clearValue.slice(6, 9)}`
            let fourthPart = `-${clearValue.slice(9, 12)}`
            const formatted_cpf = `${fistPart}${secunfPart}${thirdPart}${fourthPart}`;
            return document.getElementById('cpf').value = formatted_cpf;
        } else {
            return document.getElementById('cpf').style.outline = "2px solid red"
        }
    }
}

//muda o a cor do backgroud do campo de media na tabela, conforme a media for maior ou menos a 5
document.addEventListener("DOMContentLoaded", function() {
    const bg_danger = '#dc3546';
    const bg_success = '#27a844';
    var table = document.body.querySelectorAll("tbody tr");
    for (let index = 0; index < table.length; index++) {
        const td = table[index].children[table[index].children.length - 1].childNodes[0].nodeValue
        if (td >= 5) {
            table[index].children[table[index].children.length - 1].style.background = bg_success;
        } else {
            table[index].children[table[index].children.length - 1].style.background = bg_danger;

        }

    }
});