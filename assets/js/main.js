function mensagemdeBoasVindas() {
    let nomeUsuario = prompt("Por favor, digite seu nome:");
    if (!nomeUsuario) {
        nomeUsuario = "Usuário";
    }
    const agora = new Date();
    const diasSemana = ["Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado"];
    
    const semanaToda = diasSemana[agora.getDay()];
    let dia = String(agora.getDate()).padStart(2, '0');
    let mes = String(agora.getMonth() + 1).padStart(2, '0');
    const ano = agora.getFullYear();
    let horas = String(agora.getHours()).padStart(2, '0');
    let minutos = String(agora.getMinutes()).padStart(2, '0');

    const texto = `Olá, ${nomeUsuario}! Hoje é ${semanaToda}, ${dia}/${mes}/${ano} - ${horas}:${minutos} (-03:00)`;

    const formularioLogout = document.querySelector("header form");
    if (formularioLogout) {
        const spanText = document.createElement("span");
        spanText.style.color = "#ffffff"; 
        spanText.style.marginRight = "15px";
        spanText.textContent = texto;
        formularioLogout.insertBefore(spanText, formularioLogout.firstChild);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    mensagemdeBoasVindas();

    const campoBusca = document.getElementById("campoBusca");
    if (campoBusca) {
        campoBusca.addEventListener("input", (event) => {
            const termo = event.target.value.toLowerCase().trim();
            const cards = document.querySelectorAll(".card, .chart-card, .quick-links-card, .kpi-card");

            cards.forEach((card) => {
                const conteudoTexto = card.textContent.toLowerCase();
                if (conteudoTexto.includes(termo)) {
                    card.style.display = ""; 
                } else {
                    card.style.display = "none"; 
                }
            });
        });
    }

    const btnThemeToggle = document.getElementById("bnt-theme-toggle");
    if (btnThemeToggle) {
        btnThemeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
            btnThemeToggle.textContent = document.body.classList.contains("dark-theme") ? "☀️" : "🌙";
        });
    }

    const btnMenuMobile = document.getElementById("btn-menu-mobile");
    const subMenu = document.querySelector(".sub-menu");

    if (btnMenuMobile && subMenu) {
        btnMenuMobile.addEventListener("click", (e) => {
            e.stopPropagation();
            subMenu.classList.toggle("active-mobile");
        });

        document.addEventListener("click", (e) => {
            if (!subMenu.contains(e.target) && !btnMenuMobile.contains(e.target)) {
                subMenu.classList.remove("active-mobile");
            }
        });
    }
});