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

  let qtyCasesForMonth = [];
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
  let newPandemicEvolution = {};


  const isLeapYear = () => {
    let today = new Date();
    currentYear = today.getFullYear();
    console.log(`Es el año: ${currentYear}`)
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
    console.log(`Este mes tiene ${daysOfTheMonth}`) 
    
  }

  const fillXAxis = () =>{
    for (let i = 0; i < daysOfTheMonth ; i++) {
          xAxis.push(i+1);      
    }
    console.log(xAxis) 
  }
  const getCurrentMonth = () => {
     let today = new Date();
     let meses = ["Enero", "Febrero", "Marzo", "Abril",
                   "Mayo", "Junio", "Julio", "Agosto", 
                   "Septiembre", "Octubre", "Noviembre", 
                   "Diciembre"];
     currentMonthNumber = today.getMonth();
     currentMonth = meses[currentMonthNumber];
     console.log(`Mes actual: ${currentMonth}`)    
  }

  const filterCurrentMonth = () => {
    let allDates = results.map(result => {
      return (result.infect_date)
    }).sort((a, b) => a - b
    ).map(result => {
      return (new Date(result * 1000))
    })
    console.log(`Todas las fechas de la API : ${allDates}`)

    allDates.map(result => {
      result.getMonth() === currentMonthNumber && (onlyDatesOfCurrentMonth.push(result))
    })
    console.log(`Las fechas de este mes son: ${onlyDatesOfCurrentMonth}`)
  }
  const filterDays = () => {
    allDaysOfTheMonth = onlyDatesOfCurrentMonth.map(result => {
      return result.getDate()
    })
    console.log(`Todos los dias con casos positivos del mes son: ${allDaysOfTheMonth}`)
  }

  const countCasesForDayOfTheMonth = () => {
    pandemicEvolution = allDaysOfTheMonth.reduce((a, b) => (a[b] ? a[b] += 1 : a[b] = 1, a), {})
    console.log(pandemicEvolution)
  }

  const createNewPandemicEvolution = (nuevaPropiedad) => {
   console.log(nuevaPropiedad)
   newPandemicEvolution = {...pandemicEvolution}
   console.log(newPandemicEvolution)
  }

  const fillYAxis = () => {
    let pandemicEvolutionII = xAxis.reduce((a, b) => (a[b] ? a[b] += 0 : a[b] = 0, a), {})
    console.log(pandemicEvolutionII)
    let final = {...pandemicEvolutionII,...pandemicEvolution }
    console.log(final)
     for (const parametro in final) {
       yAxis.push(final[parametro])
    }
    console.log(yAxis)
  }
  /////////

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

  ////////// 


  const setConfig = () => {
    data = { 
      labels: xAxis,
      datasets: [
        {
          label: `Evolución de casos positivos COVID-19 ${currentMonth} ${currentYear}`,
          data: yAxis,
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
      {results && drawChart()}
      {results && fillChart()}
      {results && setConfig()} 
      <Line data={data} options={options} />
    </div>
  )
}

export default ChartPandemicEvolution
