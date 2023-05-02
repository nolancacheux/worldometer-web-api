import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import { useRef } from 'react';
import './style.css'


const DonutChart = ({nameValue1, nameValue2, value1, value2 }) => {  
    const chartRef = React.useRef();

    React.useEffect(() => {
        const myChartRef = chartRef.current.getContext('2d');
        new Chart(myChartRef, {
            type: 'doughnut',
            data: {
                labels: [nameValue1, nameValue2],
                datasets: [
                    {
                        label: 'Population',
                        data: [value1, value2],
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
        <div class='DonutChart'>
            <canvas id="myChart" ref={chartRef} />
        </div>
    );
};

const PieChart = ({nameData1, nameData2, nameData3, data1, data2, data3}) => {
    const chartContainer = useRef(null);
  
    useEffect(() => {
      if (chartContainer && chartContainer.current) {
        const myChart = new Chart(chartContainer.current, {
          type: 'pie',
          data: {
            labels: [nameData1, nameData2, nameData3],
            datasets: [
              {
                backgroundColor: ['#FFD670', '#EAC4D5', '#81D2C7'],
                data: [data1, data2, data3]
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              }
            }
          }
        });
        return () => myChart.destroy();
      }
    }, [data1, data2, data3]);
  
    return (
      <div class='PieChart'>
        <canvas ref={chartContainer} />
      </div>
    );
};

const PieChart5 = ({nameData1, nameData2, nameData3, nameData4, nameData5, data1, data2, data3, data4, data5}) => {
  const chartContainer = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const myChart = new Chart(chartContainer.current, {
        type: 'pie',
        data: {
          labels: [nameData1, nameData2, nameData3, nameData4, nameData5],
          datasets: [
            {
              backgroundColor: ['#FFD670', '#EAC4D5', '#81D2C7', '#C5D86D', '#A7ACD9'],
              data: [data1, data2, data3, data4, data5]
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            }
          }
        }
      });
      return () => myChart.destroy();
    }
  }, [data1, data2, data3]);

  return (
    <div class='PieChart'>
      <canvas ref={chartContainer} />
    </div>
  );
};

const PolarAreaChart = ({ data1, data2, data3 }) => {
    const chartContainer = useRef(null);
  
    useEffect(() => {
      if (chartContainer && chartContainer.current) {
        const myChart = new Chart(chartContainer.current, {
            type: 'polarArea',
          data: {
            labels: ['Value 1', 'Value 2', 'Value 3'],
            datasets: [
              {
                data: [data1, data2, data3],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
              },
            ],
          },
          options: {
            responsive: true,
          },
        });
        return () => myChart.destroy();
      }
    }, [data1, data2, data3]);
  
    return (
        <div class='PolarAreaChart'>
            <canvas ref={chartContainer} />
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
            <div class='MultiSeriesPieChart'>
                <canvas ref={this.chartRef} />
            </div>
        )
    }
};

const BarChartBorderRadius = ({ nameCol1, nameCol2, data }) => {
    const chartContainer = useRef(null);
  
    useEffect(() => {
      if (chartContainer && chartContainer.current) {
        const chartData = {
          labels: data.map((item) => item.created_at),
          datasets: [
            {
              label: nameCol1,
              data: data.map((item) => item.deaths_today),
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
              borderColor: 'rgb(255, 99, 132)',
              borderWidth: 1,
              borderRadius: 10,
            },
            {
              label: nameCol2,
              data: data.map((item) => item.births_today),
              backgroundColor: 'rgba(54, 162, 235, 0.5)',
              borderColor: 'rgb(54, 162, 235)',
              borderWidth: 1,
              borderRadius: 10,
            },
          ],
        };
  
        const chartOptions = {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        };
  
        const myChart = new Chart(chartContainer.current, {
          type: 'bar',
          data: chartData,
          options: chartOptions,
        });
  
        return () => myChart.destroy();
      }
    }, [data]);
  
    return (
      <div class='BarChartBorderRadius'>
        <canvas ref={chartContainer} />
      </div>
    );
};

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
    const energy = 
      {
        created_at:"2023-04-07T07:06:13.000Z",
        energy_used_today:160252695251,
        non_renewable_sources_used_today:131750127340,
        renewable_sources_used_today:28502411017,
        solar_energy_reaching_earth_today:17309196232584,
        oil_pumped_today:80378520,
        oil_remaining:1634088999894,
        days_to_the_end_of_oil:50,
        gas_remaining:196159000000,
        days_to_the_end_of_gas:60,
        coal_remaining:1086980000000,
        days_to_the_end_of_coal:142
      };
    const environment = {
        created_at:"2023-04-07T07:06:13.000Z",
        forest_area_lost_this_year:120000,
        arable_land_lost_this_year:183000,
        co2_emissions_this_year:32520979240,
        desertification_this_year:28474000,
        toxic_chemicals_released_this_year:2000000000
    };
      const health = {
        created_at:"2023-04-07T07:06:13.000Z",
        deaths_of_children_under_five_this_year:59046634,
        abortions_this_year:7681430,
        maternal_deaths_this_year:4062620,
        people_infected_with_hiv_aids:2144420,
        deaths_caused_by_hiv_aids_this_year:4010000,
        deaths_caused_by_cancer_this_year:1249093,
        deaths_caused_by_malaria_this_year:9391554,
        cigarettes_smoked_today:389102,
        deaths_caused_by_smoking_this_year:190273,
        deaths_caused_by_alcohol_this_year:5797,
        suicides_this_year:2928558,
        money_spent_on_illegal_drugs_this_year:1357540,
        deaths_caused_by_road_traffic_accidents_this_year:201541
      };
      const water = {
        created_at:"2023-04-07T07:06:13.000Z",
        water_used_this_year:413999000000000,
        water_related_deaths_this_year:1130000,
        people_without_access_to_clean_water:783000000
      };
      const media = {
        created_at:"2023-04-07T07:06:13.000Z",
        new_books_published_this_year:2883301,
        newspaper_copies_printed_today:24725124,
        tvs_sold_today:39509,
        mobile_phones_sold_today:2699522,
        video_games_spending_today:1200000000,
        internet_users_in_the_world:4091406844,
        emails_sent_today:333140000000,
        blog_posts_written_today:847998,
        tweets_sent_today:74834234,
        google_searches_today:6000000000
      };
      const gouvernmentEconomy ={
        created_at:"2023-04-07T07:06:13.000Z",
        global_health_spending_today:9333000000,
        global_education_spending_today:4960000000,
        global_military_spending_today:1915000000,
        cars_produced_this_year:78902622,
        bicycles_produced_this_year:133877527,
        computers_sold_this_year:353182016
      };

    const Data = [
        {
          created_at: "2022-05-01",
          deaths_today: 10000,
          births_today: 5000
        },
        {
          created_at: "2022-05-02",
          deaths_today: 15000,
          births_today: 700
        },
        {
          created_at: "2022-05-03",
          deaths_today: 80000,
          births_today: 90000
        },
    ];
    

    return (
        <div>
          <h1>Stats Population</h1>
            <h2>Statistique de la population cette année</h2>
            <DonutChart
                nameValue1={'Naissance'}
                nameValue2={'Décès'}
                value1={data.births_this_year}
                value2={data.deaths_this_year}
            />
            <h2>Statistique de la population aujourd'hui</h2>
            <DonutChart
                nameValue1={'Naissance'}
                nameValue2={'Décès'}
                value1={data.births_today}
                value2={data.deaths_today}
            />
            <h2>Statistiques Population</h2>
            <MultiSeriesPieChart
                current_population={data.current_population}
                births_today={data.births_today}
                deaths_today={data.deaths_today}
                growth_today={data.growth_today}
                births_this_year={data.births_this_year}
                deaths_this_year={data.deaths_this_year}
                growth_this_year={data.growth_this_year}
            />
            <h2>Statistique Population</h2>
            <PieChart
                nameData1={'Naissances aujourd\'hui'}
                nameData2={'Décès aujourd\'hui'}
                nameData3={'Croissance aujourd\'hui'}
                data1={data.births_today}
                data2={data.deaths_today}
                data3={data.growth_today}
            />
            <h2>Statistique Population</h2>
            <PolarAreaChart
                data1={1}
                data2={2}
                data3={3}
            />
            <h2>Statistique Population</h2>
            <BarChartBorderRadius 
                nameCol1={'deaths'}
                nameCol2={'births'}
                data={Data}
            />
          <h1>Stats energy</h1>
            <h2>Energy renew vs non_renew</h2>
            <DonutChart
              nameValue1={'energies_renouvelables'}
              nameValue2={'energies_non_renouvelables'}
              value1={energy.renewable_sources_used_today}
              value2={energy.non_renewable_sources_used_today}
            />
            <h2>Energy</h2>
            <PieChart
              nameData1={'pétrol restant'}
              nameData2={'gaz restant'}
              nameData3={'charbon restant'}
              data1={energy.oil_remaining}
              data2={energy.gas_remaining}
              data3={energy.coal_remaining}
            />
          <h1>Stats environment</h1>
            <h2>Flemme pour les noms</h2>
            <PieChart5
              nameData1={'forest_area_lost_this_year'}
              nameData2={'arable_land_lost_this_year'}
              nameData3={'co2_emissions_this_year'}
              nameData4={'desertification_this_year'}
              nameData5={'toxic_chemicals_released_this_year'}
              data1={environment.forest_area_lost_this_year}
              data2={environment.arable_land_lost_this_year}
              data3={environment.co2_emissions_this_year}
              data4={environment.desertification_this_year}
              data5={environment.toxic_chemicals_released_this_year}
            />
          <h1>Stats water</h1>
            <h2>Flemme</h2>
            <DonutChart
              nameValue1={'No water access'}
              nameValue2={'Death'}
              value1={water.people_without_access_to_clean_water}
              value2={water.water_related_deaths_this_year}
            />

        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));