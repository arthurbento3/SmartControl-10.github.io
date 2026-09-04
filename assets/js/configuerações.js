document.addEventListener('DOMContentLoaded', () => {

  const btnVoltar = document.getElementById('btn-voltar');
  if (btnVoltar) {
    btnVoltar.addEventListener('click', () => {
      if (window.history.length > 1 && document.referrer !== "") {
        window.history.back();
      } else {
        window.location.href = 'index.html'; 
      }
    });
  }

  const btnLogout = document.getElementById('btn-logout');
  if (btnLogout) {
    btnLogout.addEventListener('click', () => {
      if (confirm('Deseja realmente sair do sistema?')) {
        window.location.href = 'login.html'; 
      }
    });
  }

  const darkModeToggle = document.getElementById('dark-mode-toggle');
  
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    if (darkModeToggle) darkModeToggle.checked = true;
  }

  if (darkModeToggle) {
    darkModeToggle.addEventListener('change', (e) => {
      if (e.target.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
      }
    });
  }


  const btnTraducao = document.getElementById('btn-traducao');
  if (btnTraducao) {
    btnTraducao.addEventListener('click', () => {
      const idioma = document.getElementById('select-idioma').value;
      alert(`Idioma alterado com sucesso para: ${idioma}`);
    });
  }

  const btnPrivacidade = document.getElementById('btn-privacidade');
  if (btnPrivacidade) {
    btnPrivacidade.addEventListener('click', () => {
      alert('Configurações de privacidade salvas.');
    });
  }

});