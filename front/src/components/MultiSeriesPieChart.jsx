import React, { Component } from 'react';
import Chart from 'chart.js/auto';

export class MultiSeriesPieChart extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const chartRef = this.chartRef.current.getContext('2d');
    const config = {
      type: 'pie',
      data: {
        labels: [
          'Augmentation population cette année',
          'Population actuelle',
          'Augmentation population aujourd\'hui',
          'Augmentation population cette année',
          'Naissances aujourd\'hui',
          'Naissances cette année',
          'Morts aujourd\'hui',
          'Morts cette année',
        ],
        datasets: [
          {
            backgroundColor: ['#AAA', '#777'],
            data: [this.props.growth_this_year, this.props.current_population],
          },
          {
            backgroundColor: ['hsl(0, 100%, 60%)', 'hsl(0, 100%, 35%)'],
            data: [this.props.growth_today, this.props.growth_this_year],
          },
          {
            backgroundColor: ['hsl(100, 100%, 60%)', 'hsl(100, 100%, 35%)'],
            data: [this.props.births_today, this.props.births_this_year],
          },
          {
            backgroundColor: ['hsl(180, 100%, 60%)', 'hsl(180, 100%, 35%)'],
            data: [this.props.deaths_today, this.props.deaths_this_year],
          },
        ],
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
                labelsOriginal.forEach((label) => {
                  label.datasetIndex = Math.floor(label.index / 2);
                  label.hidden = !chart.isDatasetVisible(label.datasetIndex);
                  label.fillStyle = datasetColors[label.index];
                });
                return labelsOriginal;
              },
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  const labelIndex = context.datasetIndex * 2 + context.dataIndex;
                  return `${context.chart.data.labels[labelIndex]}: ${context.formattedValue}`;
                },
              },
            },
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const labelIndex = context.dataIndex;
                const dataset = context.datasetIndex;
                const value = context.dataset.data[labelIndex];
                const label = context.chart.data.labels[labelIndex];
                return `${label}: ${value}`;
              },
            },
          },
        },
      },
    };
    if (typeof this.chart !== 'undefined') {
      this.chart.destroy();
    }
    this.chart = new Chart(chartRef, config);
  }

  render() {
    return (
      <div>
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}