let aluno1 = {RA: 00304225, Nome: "Jorge Marcelo"};

let aluno2 = new Object();
aluno2["RA"] = 00304225;
aluno2.Nome = "Jorge Marcelo";

function Aluno(ra, nome) {
    this.RA = ra;
    this.Nome = nome;
}

let aluno3 = new Aluno(00304225, "Jorge Marcelo");

alert("Aluno 1: " + aluno1.RA + " " + aluno1.Nome);
alert("Aluno 2: " + aluno2["RA"] + " " + aluno1["Nome"]);
alert("Aluno 3: " + aluno3.RA + " " + aluno1.Nome);