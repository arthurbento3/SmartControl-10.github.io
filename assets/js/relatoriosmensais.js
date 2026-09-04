let comparativoChart = null;

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Botão Voltar Funcional
  const btnVoltar = document.getElementById('btn-voltar');
  if (btnVoltar) {
    btnVoltar.addEventListener('click', () => {
      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.href = 'index.html';
      }
    });
  }

  // 2. Botão Logout Funcional
  const btnLogout = document.getElementById('btn-logout');
  if (btnLogout) {
    btnLogout.addEventListener('click', () => {
      if (confirm('Deseja realmente sair do sistema?')) {
        window.location.href = 'login.html';
      }
    });
  }

  // 3. Botão Modo Escuro Funcional
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      
      const themeIcon = themeBtn.querySelector('i');
      if (themeIcon) {
        themeIcon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
      }

      // Atualizar cores do gráfico
      if (comparativoChart) {
        const color2024 = isDark ? '#60a5fa' : '#0a2540';
        const textColor = isDark ? '#94a3b8' : '#475569';

        comparativoChart.data.datasets[0].borderColor = color2024;
        comparativoChart.data.datasets[0].pointBackgroundColor = color2024;
        comparativoChart.options.scales.x.ticks.color = textColor;
        comparativoChart.options.scales.y.ticks.color = textColor;
        comparativoChart.update();
      }
    });
  }

  // 4. Botão de Áudio (Text-to-Speech)
  const audioBtn = document.getElementById('audio-toggle');
  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      if ('speechSynthesis' in window) {
        if (window.speechSynthesis.speaking) {
          window.speechSynthesis.cancel();
          return;
        }

        const resumoTexto = "Relatórios mensais. Total de conclusões do mês: 1.502. Taxa de engajamento: 77%. Maior volume de acessos na biblioteca com 550 acessos.";
        const utterance = new SpeechSynthesisUtterance(resumoTexto);
        utterance.lang = 'pt-BR';
        window.speechSynthesis.speak(utterance);
      } else {
        alert('Recurso de síntese de voz não suportado neste navegador.');
      }
    });
  }

  // 5. Renderização do Gráfico Chart.js
  const canvas = document.getElementById('comparativoChart');
  if (canvas) {
    const ctx = canvas.getContext('2d');

    comparativoChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jun'],
        datasets: [
          {
            label: '2024',
            data: [160, 300, 550, 430, 340, 550, 420],
            borderColor: '#0a2540',
            backgroundColor: 'rgba(10, 37, 64, 0.08)',
            borderWidth: 2,
            pointRadius: 4,
            pointBackgroundColor: '#0a2540',
            tension: 0.35,
            fill: true
          },
          {
            label: '2023',
            data: [200, 420, 420, 290, 340, 420, 160],
            borderColor: '#38bdf8',
            backgroundColor: 'transparent',
            borderWidth: 2,
            pointRadius: 4,
            pointBackgroundColor: '#38bdf8',
            tension: 0.35
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              color: '#475569',
              font: { size: 11 }
            }
          },
          y: {
            min: 0,
            max: 600,
            ticks: {
              stepSize: 200,
              color: '#475569',
              font: { size: 11 }
            },
            grid: {
              color: '#e2e8f0'
            }
          }
        }
      }
    });
  }
});
