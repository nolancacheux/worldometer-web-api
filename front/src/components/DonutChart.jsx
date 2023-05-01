import React from 'react';
import Chart from 'chart.js/auto';

export function DonutChart ({ births_this_year, deaths_this_year }) {
    const chartRef = React.useRef();

    React.useEffect(() => {
        const myChartRef = chartRef.current.getContext('2d');
        new Chart(myChartRef, {
            type: 'doughnut',
            data: {
                labels: ['Naissances', 'Morts'],
                datasets: [
                    {
                        label: 'Population',
                        data: [births_this_year, deaths_this_year],
                        backgroundColor: ['#36a2eb', '#ff6384'],
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: 'Statistiques de la population cette année',
                },
                legend: {
                    display: true,
                    position: 'bottom',
                },
            },
        });
    }, );

    return (
        <div>
            <canvas id="myChart" ref={chartRef} />
        </div>
    );
};