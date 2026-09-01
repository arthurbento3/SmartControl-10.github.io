const themeToggleBtn = document.getElementById('themeToggle');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

const ctx = document.getElementById('acessosChart').getContext('2d');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun'],
        datasets: [
            {
                label: '2024',
                data: [120, 300, 550, 430, 340, 550],
                borderColor: '#0f172a',
                backgroundColor: '#0f172a',
                tension: 0.3,
                pointRadius: 5
            },
            {
                label: '2023',
                data: [200, 420, 520, 290, 340, 420],
                borderColor: '#38bdf8',
                backgroundColor: '#38bdf8',
                tension: 0.3,
                pointRadius: 5
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                align: 'end'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 600,
                grid: {
                    color: 'rgba(200, 200, 200, 0.1)'
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
});