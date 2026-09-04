let lineChart = null;
let barChart = null;

document.addEventListener('DOMContentLoaded', () => {

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

  const btnLogout = document.getElementById('btn-logout');
  if (btnLogout) {
    btnLogout.addEventListener('click', () => {
      if (confirm('Deseja realmente fazer logout?')) {
        window.location.href = 'login.html';
      }
    });
  }

  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');

      const icon = themeBtn.querySelector('i');
      if (icon) {
        icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
      }

      atualizarGraficosTema(isDark);
    });
  }

  const audioBtn = document.getElementById('audio-toggle');
  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      if ('speechSynthesis' in window) {
        if (window.speechSynthesis.speaking) {
          window.speechSynthesis.cancel();
          return;
        }

        const texto = "Relatório em tempo real. Média de tempo de sessão: 8 minutos e 32 segundos. Novas inscrições hoje: 15. Acessos na última hora: Cursos 145, Fórum 88, Biblioteca 65.";
        const utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR';
        window.speechSynthesis.speak(utterance);
      } else {
        alert('Seu navegador não suporta leitura em áudio.');
      }
    });
  }

  const lineCanvas = document.getElementById('realtimeLineChart');
  if (lineCanvas) {
    const ctx = lineCanvas.getContext('2d');
    
    const gradient = ctx.createLinearGradient(0, 0, 0, 150);
    gradient.addColorStop(0, 'rgba(43, 127, 255, 0.35)');
    gradient.addColorStop(1, 'rgba(43, 127, 255, 0.0)');

    lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['24', '31', '29'],
        datasets: [{
          data: [24, 28, 23, 31, 26, 29, 25, 29],
          borderColor: '#2b7fff',
          borderWidth: 2.5,
          backgroundColor: gradient,
          fill: true,
          tension: 0.35,
          pointRadius: 4,
          pointBackgroundColor: '#2b7fff'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: '#5a6e85', font: { size: 10 } }
          },
          y: { display: false }
        }
      }
    });
  }

  const barCanvas = document.getElementById('moduleBarChart');
  if (barCanvas) {
    const ctx = barCanvas.getContext('2d');

    barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Cursos', 'Fórum', 'Biblioteca'],
        datasets: [{
          data: [145, 88, 65],
          backgroundColor: '#0b1e36',
          borderRadius: 4,
          barThickness: 55
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: '#0f2d59', font: { size: 11, weight: 'bold' } }
          },
          y: {
            min: 0,
            max: 150,
            ticks: { stepSize: 50, color: '#5a6e85', font: { size: 10 } },
            grid: { color: '#dbe4ee' }
          }
        }
      }
    });
  }
});

function atualizarGraficosTema(isDark) {
  if (barChart) {
    barChart.data.datasets[0].backgroundColor = isDark ? '#3b82f6' : '#0b1e36';
    barChart.options.scales.x.ticks.color = isDark ? '#f1f5f9' : '#0f2d59';
    barChart.options.scales.y.grid.color = isDark ? '#27374d' : '#dbe4ee';
    barChart.update();
  }

  if (lineChart) {
    const lineCol = isDark ? '#38bdf8' : '#2b7fff';
    lineChart.data.datasets[0].borderColor = lineCol;
    lineChart.data.datasets[0].pointBackgroundColor = lineCol;
    lineChart.update();
  }
}