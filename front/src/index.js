/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import { useRef } from 'react';
import './style.css'


const DonutChart = ({nameValue1, nameValue2, value1, value2 }) => {  
  const chartRef = React.useRef();
  let myChart = null;

  React.useEffect(() => {
      const myChartRef = chartRef.current.getContext('2d');
      if (myChart) {
          myChart.destroy();
      }
      
      myChart = new Chart(myChartRef, {
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
      
      return () => {
          myChart.destroy();
      }
  }, [value1, value2]);

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
    this.initializeChart();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (typeof this.chart !== 'undefined') {
        this.chart.destroy();
      }

      this.initializeChart();
    }
  }

  initializeChart() {
    const ChartRef = this.chartRef.current.getContext('2d');

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
                label: function (context) {
                  const labelIndex = (context.datasetIndex * 2) + context.dataIndex;
                  return context.chart.data.labels[labelIndex] + ': ' + context.formattedValue;
                }
              }
            }
          },
          tooltip: {
            callbacks: {
              label: function (context) {
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
    this.chart = new Chart(myChartRef, config);
  }

  render() {
    return (
      <div className='MultiSeriesPieChart'>
        <canvas ref={this.chartRef} />
      </div>
    )
  }
};

const BarChartBorderRadius = ({ nameCol1, nameCol2, nameCol3, nameCol4, nameCol5, nameCol6, data }) => {
    const chartContainer = useRef(null);
  
    useEffect(() => {
      if (chartContainer && chartContainer.current) {
        const chartData = {
          labels: data.map((item) => item.created_at),
          datasets: [
            {
              label: nameCol1,
              data: data.map((item) => item.deaths_this_year),
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
              borderColor: 'rgb(255, 99, 132)',
              borderWidth: 1,
              borderRadius: 10,
            },
            {
              label: nameCol2,
              data: data.map((item) => item.water),
              backgroundColor: '#ffce56',
              borderColor: '#ffce56',
              borderWidth: 1,
              borderRadius: 10,
            },
            {
              label: nameCol3,
              data: data.map((item) => item.alcohol),
              backgroundColor: '#ff3333',
              borderColor: '#ff3333',
              borderWidth: 1,
              borderRadius: 10,
            },
            {
              label: nameCol4,
              data: data.map((item) => item.cancer),
              backgroundColor: 'rgba(54, 162, 235, 0.5)',
              borderColor: 'rgb(54, 162, 235)',
              borderWidth: 1,
              borderRadius: 10,
            },
            {
              label: nameCol5,
              data: data.map((item) => item.accident),
              backgroundColor: '#81d2c7',
              borderColor: '#81d2c7',
              borderWidth: 1,
              borderRadius: 10,
            },
            {
              label: nameCol6,
              data: data.map((item) => item.smoke),
              backgroundColor: '#eac4d5',
              borderColor: '#eac4d5',
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
    let population_stat;
    let energy_stat;
    let environment_stat;
    let water_stat;
    let health_stat;


    const fetchData = async()=> {
      // #region population
      try {
        const response = await fetch('http://localhost:3001/population');
        const json = await response.json();
        population_stat = json;
        setData({
          created_at: population_stat.created_at,
          current_population: population_stat.current_population,
          births_this_year: population_stat.births_this_year,
          births_today: population_stat.births_today,
          deaths_this_year: population_stat.deaths_this_year,
          deaths_today: population_stat.deaths_today,
          growth_this_year: population_stat.growth_this_year,
          growth_today: population_stat.growth_today,
        })
        console.log('fetch population')
      } catch (error) {
        console.error(error);
      }
      // #endregion
      // #region energy
      try {
        const response = await fetch('http://localhost:3001/energy');
        const json = await response.json();
        energy_stat = json[json.length - 1];
        console.log("energy stat oil", energy.oil_remaining);
        console.log("energy stat gas", energy.gas_remaining);

        
        setEnergy({
          created_at: energy_stat.created_at,
          energy_used_today:energy_stat.energy_used_today,
          non_renewable_sources_used_today:energy_stat.non_renewable_sources_used_today,
          renewable_sources_used_today:energy_stat.renewable_sources_used_today,
          solar_energy_reaching_earth_today:energy_stat.solar_energy_reaching_earth_today,
          oil_pumped_today:energy_stat.oil_pumped_today,
          oil_remaining:energy_stat.oil_remaining,
          days_to_the_end_of_oil:energy_stat.days_to_the_end_of_oil,
          gas_remaining:energy_stat.gas_remaining,
          days_to_the_end_of_gas:energy_stat.days_to_the_end_of_gas,
          coal_remaining:energy_stat.coal_remaining,
          days_to_the_end_of_coal:energy_stat.days_to_the_end_of_coal
        }) 
        console.log('fetch energy')
       
      } catch (error) {
        console.error(error);
      }
      // #endregion
      // #region environment
      try {
        const response = await fetch('http://localhost:3001/environment');
        const json = await response.json();
        environment_stat = json;
        //console.log("energy stat", energy_stat);
        setEnvironment({
          created_at:environment_stat.created_at,
          forest_area_lost_this_year:environment_stat.forest_area_lost_this_year,
          arable_land_lost_this_year:environment_stat.arable_land_lost_this_year,
          co2_emissions_this_year:environment_stat.co2_emissions_this_year,
          desertification_this_year:environment_stat.desertification_this_year,
          toxic_chemicals_released_this_year:environment_stat.toxic_chemicals_released_this_year,
        }) 
        console.log('fetch environment')
       
      } catch (error) {
        console.error(error);
      }
      // #endregion
      // #region water
      try {
        const response = await fetch('http://localhost:3001/water');
        const json = await response.json();
        water_stat = json;
        //console.log("energy stat", energy_stat);
        setWater({
          created_at:water_stat.created_at,
          water_used_this_year:water_stat.water_used_this_year,
          water_related_deaths_this_year:water_stat.water_related_deaths_this_year,
          people_without_access_to_clean_water:water_stat.people_without_access_to_clean_water
        }) 
        console.log('fetch water')
       
      } catch (error) {
        console.error(error);
      }
      // #endregion
      // #region health
      try {
        const response = await fetch('http://localhost:3001/health');
        const json = await response.json();
        health_stat = json
        console.log("energy stat", energy_stat);
        setHealth({
          created_at:health_stat.created_at,
          deaths_of_children_under_five_this_year:health_stat.deaths_of_children_under_five_this_year,
          abortions_this_year:health_stat.abortions_this_year,
          maternal_deaths_this_year:health_stat.maternal_deaths_this_year,
          people_infected_with_hiv_aids:health_stat.people_infected_with_hiv_aids,
          deaths_caused_by_hiv_aids_this_year:health_stat.deaths_caused_by_hiv_aids_this_year,
          deaths_caused_by_cancer_this_year:health_stat.deaths_caused_by_cancer_this_year,
          deaths_caused_by_malaria_this_year:health_stat.deaths_caused_by_malaria_this_year,
          cigarettes_smoked_today:health_stat.cigarettes_smoked_today,
          deaths_caused_by_smoking_this_year:health_stat.deaths_caused_by_smoking_this_year,
          deaths_caused_by_alcohol_this_year:health_stat.deaths_caused_by_alcohol_this_year,
          suicides_this_year:health_stat.suicides_this_year,
          money_spent_on_illegal_drugs_this_year:health_stat.money_spent_on_illegal_drugs_this_year,
          deaths_caused_by_road_traffic_accidents_this_year:health_stat.deaths_caused_by_road_traffic_accidents_this_year
        }) 
        console.log('fetch health')
      
      } catch (error) {
        console.error(error);
      }
      // #endregion
      
    }

    useEffect(()=>{    fetchData();
    },[])

  //population
    const [data, setData] = useState({
        created_at: '2023-04-07T07:06:13.000Z',
        current_population: 123,
        births_this_year: 214,
        deaths_this_year: 50,
        deaths_today: 600,
        growth_this_year: 20,
        growth_today: 30,
    }); 

    useEffect(()=>{    console.log("data = ", data);
    },[data])


    const [energy, setEnergy] = useState({
        created_at:"2023-04-07T07:06:13.000Z",
        energy_used_today:234,
        non_renewable_sources_used_today:234,
        renewable_sources_used_today:234,
        solar_energy_reaching_earth_today:123,
        oil_pumped_today:123,
        oil_remaining:123,
        days_to_the_end_of_oil:123,
        gas_remaining:123,
        days_to_the_end_of_gas:60,
        coal_remaining:123,
        days_to_the_end_of_coal:123
    });
  //   useEffect(()=>{    console.log("energy = ", energy);
  // },[energy])

  const [environment, setEnvironment] = useState({
        created_at:"2023-04-07T07:06:13.000Z",
        forest_area_lost_this_year:1,
        arable_land_lost_this_year:2,
        co2_emissions_this_year:3,
        desertification_this_year:4,
        toxic_chemicals_released_this_year:5
    });
    const [health, setHealth] = useState({
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
      });

      const [water, setWater] = useState({
        created_at:"2023-04-07T07:06:13.000Z",
        water_used_this_year:2,
        water_related_deaths_this_year:3,
        people_without_access_to_clean_water:4
      });
      const [media, setMedia] = useState({
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
      });
      const [gouvernmentEconomy, setGouvernmentEconomy] = useState({
        created_at:"2023-04-07T07:06:13.000Z",
        global_health_spending_today:9333000000,
        global_education_spending_today:4960000000,
        global_military_spending_today:1915000000,
        cars_produced_this_year:78902622,
        bicycles_produced_this_year:133877527,
        computers_sold_this_year:353182016
      });

    const Data = [
        {
          created_at: "this year",
          deaths_this_year: data.deaths_this_year,
          water: water.water_related_deaths_this_year,
          alcohol:health.deaths_caused_by_alcohol_this_year,
          cancer: health.deaths_caused_by_alcohol_this_year,
          accident:health.deaths_caused_by_road_traffic_accidents_this_year,
          smoke:health.deaths_caused_by_smoking_this_year
        }
    ];
    

    return (
        <div>
          <h1>Worldometer data visualisation</h1>

            <h2>Statistique de population</h2>
            <br></br>

            <h3>Cette année</h3>
            <DonutChart
                nameValue1={'Naissance'}
                nameValue2={'Décès'}
                value1={data.births_this_year}
                value2={data.deaths_this_year}
            />
            <h3>Aujourd'hui</h3>
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
            {/* <h2>Statistique Population</h2>
            <PieChart
                nameData1={'Naissances aujourd\'hui'}
                nameData2={'Décès aujourd\'hui'}
                nameData3={'Croissance aujourd\'hui'}
                data1={data.births_today}
                data2={data.deaths_today}
                data3={data.growth_today}
            /> */}
            {/* <h2>Statistique Population</h2>
            <PolarAreaChart
                data1={1}
                data2={2}
                data3={3}
            /> */}
            <h2>Statistiques de mortalité</h2>
            {/* <h2>Statistique Population</h2> */}
            <BarChartBorderRadius 
                nameCol1={'total deaths'}
                nameCol2={'water'}
                nameCol3={'alcohol'}
                nameCol4={'cancer'}
                nameCol5={'road traffic accident'}
                nameCol6={'smoking'}
                data={Data}
             
            />
          <h1>Statistiques d'énergie</h1>
            <h2>Energie renouvelable vs non renouvelable</h2>
            <DonutChart
              nameValue1={'energies_renouvelables'}
              nameValue2={'energies_non_renouvelables'}
              value1={energy.renewable_sources_used_today}
              value2={energy.non_renewable_sources_used_today}
            />
            <h2>Part d'énergie non renouvelable restante</h2>
            <PieChart
              nameData1={'pétrol restant'}
              nameData2={'gaz restant'}
              nameData3={'charbon restant'}
              data1={energy.oil_remaining}
              data2={energy.gas_remaining}
              data3={energy.coal_remaining}
            />
          <h1>Statistiques sur l'environment</h1>
            <h2>Terrains perdus</h2>
            <PieChart5
              nameData1={'forest_area_lost_this_year'}
              nameData2={'arable_land_lost_this_year'}
              //nameData3={'co2_emissions_this_year'}
              nameData3={'desertification_this_year'}
             // nameData5={'toxic_chemicals_released_this_year'}
              data1={environment.forest_area_lost_this_year}
              data2={environment.arable_land_lost_this_year}
              //data3={environment.co2_emissions_this_year}
              data3={environment.desertification_this_year}
              //data5={environment.toxic_chemicals_released_this_year}
            />
          {/* <h1>Stats water</h1>
            <h2>Flemme</h2>
            <DonutChart
              nameValue1={'No water access'}
              nameValue2={'Death'}
              value1={water.people_without_access_to_clean_water}
              value2={water.water_related_deaths_this_year}
            />


          <h1>Stats water (this year)</h1>
            <h2>Death</h2>
            <DonutChart
              nameValue1={'water related deaths'}
              nameValue2={'total Death'}
              value2={data.deaths_this_year}
              value1={water.water_related_deaths_this_year}
            /> */}
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));