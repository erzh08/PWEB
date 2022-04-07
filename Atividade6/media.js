let nome = prompt("Informe seu nome");
let media = 0;
for (let i = 0; i < 3; i++) {
    media += parseFloat(prompt("Informe a " + (i+1) + " nota"));
}
media /= 3;
let corr = confirm("A média do aluno " + nome + " é " + media.toFixed(2) + "\nIsso está correto?");
if (corr) {
    alert("Obrigado, esperamos que esteja satisfeito com o serviço!");
} else {
    alert("Obrigado pelo aviso, nos esforçaremos para melhorar nosso serviço.");
}