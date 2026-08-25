function mensagemdeBoasVindas() {
    let nomeUsuario=prompt("Por favor, digite seu nome:");
    if (nomeUsuario ==="") {
        nomeUsuario="Usuario"
    }
    const agora = new Date();
    const diasSemana = ["Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado"];
    
    const semanaToda =  diasSemana[agora.getDay()];
    let dia = String(agora.getDate());
    if (agora.getDate() < 10) {
        dia = "0" + dia;
    }

    let mes = String(agora.getMonth() + 1);
    if (agora.getMonth() + 1 < 10) {
        mes = "0" + mes;
    }

    const ano = agora.getFullYear();

    let horas = String(agora.getHours());
    if (agora.getHours() < 10) {
        horas = "0" + horas;
    }

    let minutos = String(agora.getMinutes());
    if (agora.getMinutes() < 10) {
        minutos = "0" + minutos;
    }

    const fusoHorario = "-03:00";
    const dataAtual = `${semanaToda}, ${dia}/${mes}/${ano} - ${horas}:${minutos} (${fusoHorario}) ` ;
    const texto =  ` Olá, ${nomeUsuario}! Hoje é ${dataAtual}  `;

    const formularioLogout = document.querySelector("header form");
    if (formularioLogout) {
        formularioLogout.childNodes[0].textContent = texto + " ";
    }
    console.log(texto);
}
  
mensagemdeBoasVindas()
document.addEventListener("DOMContentLoaded", () => {

    // --- REQUISITO 1: Alternância de Tema (Dark Mode / Light Mode) ---
    // Adiciona o botão de tema na navbar dinamicamente
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        const btnTema = document.createElement("button");
        btnTema.id = "btn-theme-toggle";
        btnTema.innerText = "🌙 Modo Escuro";
        btnTema.style.cursor = "pointer";
        btnTema.style.padding = "6px 12px";
        btnTema.style.borderRadius = "4px";
        btnTema.style.border = "none";
        
        // Insere o botão antes do botão de áudio na navbar
        const btnAudio = document.querySelector(".btn-audio");
        if (btnAudio) {
            navbar.insertBefore(btnTema, btnAudio);
        } else {
            navbar.appendChild(btnTema);
        }

        // Evento de clique para alternar a classe 'dark-theme' no <body>
        btnTema.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
            if (document.body.classList.contains("dark-theme")) {
                btnTema.innerText = "☀️ Modo Claro";
            } else {
                btnTema.innerText = "🌙 Modo Escuro";
            }
        });
    }

    // --- REQUISITO 2: Filtro em Tempo Real no Campo de Busca ---
    const campoBusca = document.getElementById("campoBusca");
    if (campoBusca) {
        campoBusca.placeholder = "Digite para buscar cards e KPIs...";

        campoBusca.addEventListener("input", (e) => {
            const termoBusca = e.target.value.toLowerCase().trim();
            
            // Seleciona todos os cards e itens pesquisáveis da página
            const cards = document.querySelectorAll(".card, .quick-links a");

            cards.forEach((card) => {
                const textoCard = card.innerText.toLowerCase();
                
                // Se o texto do card contiver o termo digitado, exibe; caso contrário, oculta
                if (textoCard.includes(termoBusca)) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }

    // --- REQUISITO 3: Painel Colapsável (Menu Lateral / Sidebar para Celular) ---
    const menuToggle = document.getElementById("menu-toggle");
    const subMenu = document.querySelector(".sub-menu");

    if (menuToggle && subMenu) {
        menuToggle.addEventListener("change", () => {
            // Alterna visibilidade do menu dinamicamente conforme o checkbox
            if (menuToggle.checked) {
                subMenu.style.display = "block";
            } else {
                subMenu.style.display = "none";
            }
        });
    }

    // Evita o recarregamento padrão ao clicar nos links de teste
    const linksGerais = document.querySelectorAll('a[href="#"]');
    linksGerais.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
        });
    });
});