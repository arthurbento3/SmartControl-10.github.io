// Registra plugin para os rótulos do gráfico
Chart.register(ChartDataLabels);

// Abrir e Fechar Sidebar
const sidebar = document.getElementById('sidebar');
const btnToggleSidebar = document.getElementById('btnToggleSidebar');

btnToggleSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

// Modo Escuro
const themeBtn = document.getElementById('bnt-theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Ação de Áudio
const audioBtn = document.querySelector('.btn-audio');
audioBtn.addEventListener('click', () => {
    alert("Recurso de Áudio ativado!");
});

// Inicialização do Gráfico
const ctx = document.getElementById('acessosChart').getContext('2d');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul'],
        datasets: [
            {
                label: '2024',
                data: [300, 550, 550, 430, 420, 550, 420],
                borderColor: '#1b2a4a',
                backgroundColor: '#1b2a4a',
                tension: 0,
                pointRadius: 5,
                pointBackgroundColor: '#1b2a4a',
                borderWidth: 2
            },
            {
                label: '2023',
                data: [200, 300, 420, 290, 340, 420, 160],
                borderColor: '#0ea5e9',
                backgroundColor: '#0ea5e9',
                tension: 0,
                pointRadius: 5,
                pointBackgroundColor: '#0ea5e9',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            datalabels: {
                align: 'top',
                anchor: 'end',
                offset: 4,
                font: { size: 11, weight: 'bold' },
                color: function(context) { return context.dataset.borderColor; },
                formatter: function(value) { return value; }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 650,
                ticks: { stepSize: 200 },
                grid: { color: 'rgba(255, 255, 255, 0.3)' }
            },
            x: { grid: { display: false } }
        }
    }
});