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