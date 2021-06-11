import React, { useState, useEffect } from "react";
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import { Line } from 'react-chartjs-2';

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "50vw", 
    marginBottom: 20,
    marginTop: 20,
  },

});

const ChartPandemicEvolution = () => {
  const classes = useStyles();
  const [results, setResults] = useState([]);

  let days = [];
  let pandemicEvolution = [];
  let qtyCasesForMonth = [];
  let options = {};
  let data = {};

  const getDays = () => {
    days = results.map(result => {
      return (result.infect_date)
    }).sort((a, b) => a - b
    ).map(result => {
      console.log(new Date(result * 1000))
      return (new Date(result * 1000))
    }).map(result => {
      console.log(result.getDay())
      return (result.getDay())
    })
    console.log(days)
  }

  const countDays = () => {
    pandemicEvolution = days.reduce((a, b) => (a[b] ? a[b] += 1 : a[b] = 1, a), {})
    console.log(pandemicEvolution)
  }

  const getQtyCases = () => {
    for (const day in pandemicEvolution) {
      qtyCasesForMonth.push(pandemicEvolution[day])
    }
  };

  const setConfig = () => {
    data = {
      labels: days,
      datasets: [
        {
          label: 'Evolución de casos positivos COVID-19 Junio 2021',
          data: qtyCasesForMonth,
          fill: false,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgba(255, 99, 132, 0.2)',
        },
      ],
    };
    options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };

  };

  useEffect(() => {
    const searchString = `https://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/infected`
    axios.get(searchString)
      .then(response => {
        setResults(response.data)
      })
  }, []);

  return (
    <div className={classes.root} >
      {results && getDays()}
      {results && countDays()}
      {results && getQtyCases()}
      {console.log(qtyCasesForMonth)}
      {results && setConfig()}
      <Line data={data} options={options} />
    </div>
  )
}

export default ChartPandemicEvolution
