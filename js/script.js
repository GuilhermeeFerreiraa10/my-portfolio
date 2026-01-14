const btn = document.getElementById("theme-toggle");
const body = document.body;

// Função para definir o ícone correto
function atualizarIcone() {
    if (body.classList.contains("light-theme")) {
        btn.innerHTML = '<i class="fa-solid fa-sun"></i>'; // Ícone de Sol no tema claro
    } else {
        btn.innerHTML = '<i class="fa-solid fa-moon"></i>'; // Ícone de Lua no tema escuro
    }
}

// Verifica se o usuário já tinha uma preferência salva
const temaSalvo = localStorage.getItem("tema");
if (temaSalvo === "light") {
    body.classList.add("light-theme");
}

// Inicializa o ícone correto ao carregar a página
atualizarIcone();

// Evento de clique
btn.addEventListener("click", () => {
    body.classList.toggle("light-theme");
    
    // Salva a escolha do usuário
    const novoTema = body.classList.contains("light-theme") ? "light" : "dark";
    localStorage.setItem("tema", novoTema);
    
    // Muda o ícone
    atualizarIcone();
});