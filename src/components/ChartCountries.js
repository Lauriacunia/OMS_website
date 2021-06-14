import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Bar } from 'react-chartjs-2';

const ChartCountries = () => {
  const [results, setResults] = useState([]);
  let countries = [];
  let qtyInfected = [];
  let options = {};
  let data = {};
  let barColor = [];


  const getCountries = () => {
    countries = results.map(result => {
      return (result.name)
    })
    console.log(countries)
  }

  const getQtyCasesForCountrie = () => {
    qtyInfected = results.map(result => {
      return (result.infected)
    })
  }

  const setConfig = () => {
    barColor = results.map(result => {
      return ('#069dba')
    })

    data = {
      labels: countries,
      datasets: [
        {
          label: 'Cantidad de Infectados',
          data: qtyInfected,
          backgroundColor: barColor,
          borderWidth: 1,
        },
      ],
    };

    options = {
      indexAxis: 'y',
      elements: {
        bar: {
          borderWidth: 2,
        },
      },
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: 'Cantidad de infectados de COVID-19 por País',
        },
      },
    };

  }

  useEffect(() => {
    const searchString = `https://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/countries`
    axios.get(searchString)
      .then(response => {
        console.log(response.data)
        setResults(response.data)
      })
  }, []);

  return (
    <div>
      {results && getCountries()}
      {results && getQtyCasesForCountrie()}
      {results && setConfig()}
      <Bar data={data} options={options} />
    </div>
  )
}

export default ChartCountries
