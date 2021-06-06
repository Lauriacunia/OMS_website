import React, { useRef, useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Line } from 'react-chartjs-2';

const useStyles = makeStyles({
  lineContainer: {
    marginBottom: 20,
    marginTop: 20,
  },

});

const ChartPandemicEvolution = () => {
  const classes = useStyles();
  const [results, setResults] = useState([]);

  let years = [];
  let yearsAsc = [];
  let pandemicEvolution = [];
  let qtyCasesForYear = [];
  let options = {};
  let data = {};

  const getYears = () => {
    years = results.map(result => {
      return (result.age)
    })
  }

  const sortYears = () => {
    yearsAsc = years.sort((a, b) => a - b)
  }
  const countYears = () => {
    pandemicEvolution = yearsAsc.reduce((a, b) => (a[b] ? a[b] += 1 : a[b] = 1, a), {});
  }

  const getQtyCases = () => {
    for (const anio in pandemicEvolution) {
      qtyCasesForYear.push(pandemicEvolution[anio])
    }
  }

  const setConfig = () => {
    data = {
      labels: yearsAsc,
      datasets: [
        {
          label: 'Evolución de casos positivos COVID-19 por año',
          data: qtyCasesForYear,
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

  }

  useEffect(() => {
    const searchString = `http://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/infected`
    fetch(searchString)
      .then(res => res.json())
      .then(data => {
        setResults(data)
      })
  }, []);

  return (
    <div className={classes.lineContainer} >
      {results && getYears()}
      {results && sortYears()}
      {results && countYears()}
      {results && getQtyCases()}
      {results && setConfig()}
      <Line data={data} options={options} />
    </div>
  )
}

export default ChartPandemicEvolution
