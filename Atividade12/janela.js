window.onload = () => {
    let janela = document.getElementById("janela-img");
    let titulo = document.getElementById("titulo");
    
    janela.onmouseover = () => {
        janela.src = "jaberta.jpg";
        titulo.innerHTML = "Feche a janela";
    };

    janela.onmouseleave = () => {
        janela.src = "jfechada.jpg";
        titulo.innerHTML = "Abra a janela";
    };

    janela.addEventListener('click', () => {
        janela.src = "jquebrada.jpg";
        titulo.innerHTML = "Quebrou a janela";
    });

    titulo.innerHTML = "Abra a janela";
    janela.src = "jfechada.jpg";
};