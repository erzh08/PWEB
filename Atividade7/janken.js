var game = true;
while (game) {
    document.getElementById("sed").style.display = "none";
    document.getElementById("yass").style.display = "none";
    document.getElementById("tie").style.display = "none";
    /* Escolha do usuario */
    let esc = prompt("Escolha: 1.pedra 2.papel 3.tesoura");

    /* Escolha aleatória do CPU */
    let pc = Math.ceil(Math.random() * 3);

    let pcn;

    switch(pc) {
        case 1:
            pcn = "pedra";
            break;
        case 2:
                pcn = "papel";
                break;
        case 3:
                pcn = "tesoura";
                break;
    }

    alert("A aleatoriedade jogou " + pcn + ".");
    /* Quem vence? */
    if ((esc == 1 && pc == 3) || (esc == 2 && pc == 1) || (esc == 3 && pc == 2)) {
        document.getElementById("body").className = "green";
        document.getElementById("yass").style.display = "block";
        alert("You wins!11!");
        game = false;
    }
    else if ((pc == 1 && esc == 3) || (pc == 2 && esc == 1) || (pc == 3 && esc == 2)) {
        document.getElementById("body").className = "red";
        document.getElementById("sed").style.display = "block";
        alert("You losing!!1");
        game = false;
    }
    else {
        document.getElementById("body").className = "yellow";
        document.getElementById("tie").style.display = "block";
        alert("Empate.");
    }

    if (!game) {
        game = prompt("Quer jogar novamente? 1.sim (qualquer outra coisa).nao") == 1 ? true : false;
    }
}