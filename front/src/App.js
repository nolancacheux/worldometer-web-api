import React from "react";

import { DonutChart } from "./components/DonutChart";
import { MultiSeriesPieChart } from "./components/MultiSeriesPieChart";

function App() {
  const data = {
    created_at: "2023-04-07T07:06:13.000Z",
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
}

export default App;
