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

  let currentMonthNumber;
  let currentMonth = "";
  let currentYear = 2021;
  let daysOfTheMonth = 31;
  let onlyDatesOfCurrentMonth =[];
  let allDaysOfTheMonth = [];
  let pandemicEvolution = [];
  let xAxis = [];
  let yAxis = [];
  let options = {};
  let data = {};

  const isLeapYear = () => {
    let today = new Date();
    currentYear = today.getFullYear();
    return (currentYear % 400 === 0) ? true : 
  			   (currentYear % 100 === 0) ? false : 
  			    currentYear % 4 === 0;
  }

  const getQtyDaysOfMonth = () =>{
    currentMonthNumber === 2 && (
       isLeapYear
       ? daysOfTheMonth = 28
       : daysOfTheMonth = 29
    )
    currentMonthNumber === 3 && (daysOfTheMonth = 30)
    currentMonthNumber === 5 && (daysOfTheMonth = 30)
    currentMonthNumber === 8 && (daysOfTheMonth = 30)
    currentMonthNumber === 10 && (daysOfTheMonth = 30)    
  }

  const fillXAxis = () =>{
    for (let i = 0; i < daysOfTheMonth ; i++) {
          xAxis.push(i+1);      
    }
  }

  const getCurrentMonth = () => {
     let today = new Date();
     let meses = ["Enero", "Febrero", "Marzo", "Abril",
                   "Mayo", "Junio", "Julio", "Agosto", 
                   "Septiembre", "Octubre", "Noviembre", 
                   "Diciembre"];
     currentMonthNumber = today.getMonth();
     currentMonth = meses[currentMonthNumber];   
  }

  const filterCurrentMonth = () => {
    let allDates = results.map(result => {
      return (result.infect_date)
    }).sort((a, b) => a - b
    ).map(result => {
      return (new Date(result * 1000))
    })
    allDates.map(result => {
      result.getMonth() === currentMonthNumber && (onlyDatesOfCurrentMonth.push(result))
      return
    })
  }

  const filterDays = () => {
    allDaysOfTheMonth = onlyDatesOfCurrentMonth.map(result => {
      return result.getDate()
    })
  }

  const countCasesForDayOfTheMonth = () => {
    pandemicEvolution = allDaysOfTheMonth.reduce((a, b) => (a[b] ? a[b] += 1 : a[b] = 1, a), {})
  }

  const fillYAxis = () => {
    let pandemicEvolutionII = xAxis.reduce((a, b) => (a[b] ? a[b] += 0 : a[b] = 0, a), {})
    let final = {...pandemicEvolutionII,...pandemicEvolution }
     for (const parametro in final) {
       yAxis.push(final[parametro])
    }
  }
 
  const drawChart = () => {
    getCurrentMonth();
    getQtyDaysOfMonth();
    fillXAxis();
  }

  const fillChart = () => {
    filterCurrentMonth()
    filterDays();
    countCasesForDayOfTheMonth();
    fillYAxis();
  }

  const setConfig = () => {
    data = { 
      labels: xAxis,
      datasets: [
        {
          label: `Evolución de casos positivos COVID-19 ${currentMonth} ${currentYear}`,
          data: yAxis,
          fill: false,
          backgroundColor: '#069dab',
          borderColor: '#069dab',
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
      {results && drawChart()}
      {results && fillChart()}
      {results && setConfig()} 
      <Line data={data} options={options} />
    </div>
  )
}

export default ChartPandemicEvolution
