import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js/auto';


const DonutChart = ({ births_this_year, deaths_this_year }) => {
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
    }, []);

    return (
        <div>
            <canvas id="myChart" ref={chartRef} />
        </div>
    );
};

class MultiSeriesPieChart extends React.Component {
    chartRef = React.createRef();

    componentDidMount() {
        const ChartRef = this.chartRef.current.getContext("2d");

        const config = {
            type: "pie",
            data: {
                labels: [
                    "Augmentation population cette année", "Population actuelle",
                    "Augmentation population aujourd'hui", "Augmentation population cette année",
                    "Naissances aujourd'hui", "Naissances cette année",
                    "Morts aujourd'hui", "Morts cette année"
                ],
                datasets: [
                    {
                        backgroundColor: ['#AAA', '#777'],
                        
                        data: [this.props.growth_this_year, this.props.current_population]
                    },
                    {
                        backgroundColor: ['hsl(0, 100%, 60%)', 'hsl(0, 100%, 35%)'],
                        
                        data: [this.props.growth_today, this.props.growth_this_year]
                    },
                    {
                        backgroundColor: ['hsl(100, 100%, 60%)', 'hsl(100, 100%, 35%)'],
                        data: [this.props.births_today, this.props.births_this_year]
                    },
                    {
                        backgroundColor: ['hsl(180, 100%, 60%)', 'hsl(180, 100%, 35%)'],
                        data: [this.props.deaths_today, this.props.deaths_this_year]
                    },
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: {
                            generateLabels: function (chart) {
                                const original = Chart.overrides.pie.plugins.legend.labels.generateLabels;
                                const labelsOriginal = original.call(this, chart);

                                let datasetColors = chart.data.datasets.map(function (e) {
                                    return e.backgroundColor;
                                });
                                datasetColors = datasetColors.flat();

                                labelsOriginal.forEach(label => {
                                    label.datasetIndex = (label.index - label.index % 2) / 2;
                                    label.hidden = !chart.isDatasetVisible(label.datasetIndex);
                                    label.fillStyle = datasetColors[label.index];
                                });

                                return labelsOriginal;
                            }
                        },
                        tooltip: {
                            callbacks: {
                              label: function(context) {
                                const labelIndex = (context.datasetIndex * 2) + context.dataIndex;
                                return context.chart.data.labels[labelIndex] + ': ' + context.formattedValue;
                              }
                            }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const labelIndex = context.dataIndex;
                                const dataset = context.datasetIndex;
                                const value = context.dataset.data[labelIndex];
                                const label = context.chart.data.labels[labelIndex];
                                return label + ': ' + value;
                            }
                        }
                    }
                }
            }
        }
        const myChartRef = this.chartRef.current.getContext('2d');
        if (typeof this.chart !== 'undefined') {
            this.chart.destroy();
        }
        this.chart = new Chart(myChartRef, config);
    }


    render() {
        return (
            <div>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}

const App = () => {
    const data = {
        created_at: '2023-04-07T07:06:13.000Z',
        current_population: 8022968573,
        births_this_year: 28890580,
        births_today: 257067,
        deaths_this_year: 14467049,
        deaths_today: 128727,
        growth_this_year: 14423531,
        growth_today: 128340,
    };

    return (
        <div>
            <h1>Statistique de la population cette année</h1>
            <DonutChart
                births_this_year={data.births_this_year}
                deaths_this_year={data.deaths_this_year}
            />
            <h1>Statistique de la population aujourd'hui</h1>
            <DonutChart
                births_this_year={data.births_today}
                deaths_this_year={data.deaths_today}
            />
            <h1>Statistiques Population</h1>
            <MultiSeriesPieChart
                current_population={data.current_population}
                births_today={data.births_today}
                deaths_today={data.deaths_today}
                growth_today={data.growth_today}
                births_this_year={data.births_this_year}
                deaths_this_year={data.deaths_this_year}
                growth_this_year={data.growth_this_year}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));