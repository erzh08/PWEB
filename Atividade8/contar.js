let idades = [];
let sexo = [];
let op = [];
let idTot = 0, pes = 0, bom = 0, ot = 0;
let fem = 0, masc = 0;
let i;
for (i = 0; i < 45; i++) {
    let resp = confirm("Você irá responder a pergunta, pessoa " + (i+1) + "?");
    if (!resp) continue;
    
    idades[i] = parseInt(prompt("Informe sua idade:"));
    if(isNaN(idades[i])) {
        alert("Responda novamente.");
        idades.pop();
        i--;
        continue;
    }
    idTot += idades[i];

    sexo[i] = prompt("Informe seu sexo: (F/M)");
    if (sexo[i] == "f" || sexo[i] == "F") fem++;
    else if (sexo[i] == "m" || sexo[i] == "M") masc++;
    else {
        alert("Responda novamente.");
        idades.pop();
        sexo.pop();
        i--;
        continue;
    }

    op[i] = parseInt(prompt("Dê sua opinião:\n1:péssimo\n2:regular\n3:bom\n4:ótimo"));
    switch(op[i]) {
        case 4:
            ot++;
            break;
        case 3:
            bom++;
            break;
        case 1:
            pes++;
            break;
        case 2:
            break;
        default:
            idades.pop();
            sexo.pop();
            op.pop();
            alert("Responda novamente.");
            i--;
            break;
    }
}

if (idades.length > 0) {
    document.getElementById("media").innerHTML = "Média das idades: " + (idTot/idades.length);
    document.getElementById("velha").innerHTML = "Pessoa mais velha tem " + Math.max(...idades);
    document.getElementById("nova").innerHTML = "Pessoa mais nova tem " + Math.min(...idades);
    document.getElementById("pess").innerHTML = "O número de pessoas que responderam péssimo foi " + pes;
    document.getElementById("porc").innerHTML = "A porcentagem de pessoas que responderam ótimo e bom é " + (((ot+bom)*100)/idades.length) + "%";
    document.getElementById("fem").innerHTML = "A quantidade de homens que responderam é " + masc;
    document.getElementById("mas").innerHTML = "A quantidade de mulheres que responderam é " + fem;

    document.getElementById("media").style.display = "block";
    document.getElementById("velha").style.display = "block";
    document.getElementById("pess").style.display = "block";
    document.getElementById("porc").style.display = "block";
    document.getElementById("fem").style.display = "block";
    document.getElementById("mas").style.display = "block";
}
else {
    document.getElementById("nova").innerHTML = "Não houveram respostas!";
    document.getElementById("nova").style.backgroundColor = "white";
    document.getElementById("nova").style.color = "red";
    document.getElementById("nova").style.fontSize = "20px";
    document.getElementById("nova").style.borderColor = "yellow";
    document.getElementById("nova").style.borderWidth = "5px";
}

document.getElementById("nova").style.display = "block";