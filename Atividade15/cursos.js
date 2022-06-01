function abrirCurso (curso) {
    if(curso.value != "Escolha um curso") {
        if (confirm("Deseja abrir uma janela com mais informações?")) {
            var curso = window.open(`${curso.value}.html`, "Informações sobre o Curso", "width = 600, height = 300");
        }
    }
}