function validar() {
    var email = /[a-zA-Z0-9]*@[a-zA-Z0-9]*.[a-zA-Z0-9]*/;
    if (document.forms.form1.elements[0].value.length < 10) {
        alert("O nome precisa ter pelo menos 10 caracteres");
    }
    if (!email.test(document.forms.form1.elements[1].value)) {
        alert("Email precisa estar no formato correto")
    }
    if (document.forms.form1.elements.comm.value.length < 20) {
        alert("O comentário precisa ter pelo menos 20 caracteres");
    }
    if (document.getElementById("sim").checked) {
        alert("Volte sempre à esta página!");
    } else {
        alert("Que bom que você voltou a visitar essa página!");
    }
}

function limpar() {
    document.forms.form1.elements[0].value = '';
    document.forms.form1.elements[1].value = '';
    document.forms.form1.elements.comm.value = '';
    document.getElementById("sim").checked = false;
    document.getElementById("nao").checked = false;
}