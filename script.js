document.addEventListener("DOMContentLoaded", function () {
    const increaseFontBtn = document.getElementById("increaseFontBtn");
    const decreaseFontBtn = document.getElementById("decreaseFontBtn");

    increaseFontBtn.addEventListener("click", () => {
        document.body.style.fontSize = "larger";
    });

    decreaseFontBtn.addEventListener("click", () => {
        document.body.style.fontSize = "smaller";
    });

    // Outros scripts para contagem de termos ou visualizações podem ser adicionados aqui
});
