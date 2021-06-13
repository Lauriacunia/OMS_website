import React, { useState, useEffect} from 'react';
import axios from 'axios'
import TotalCasesContext from './context/TotalCasesContext';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter,
  Route,
  Switch,
}
  from 'react-router-dom'
import 'fontsource-roboto';
import Container from '@material-ui/core/Container';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Cases from './components/Cases';
import Report from './components/Report';
import WorldData from './components/WorldData';
import Page404 from './components/Page404';
import Footer from './components/Footer';

const useStyles = makeStyles({
  "@global": {
    body: {
      margin: 0,
      padding: 0,
      backgroundColor: "#f1f7ee",
    }
  },
  container: {
    padding: 0,
  },
});

const App = () => {
  const classes = useStyles();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const searchString = `https://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/infected`
    axios.get(searchString)
         .then(response => {
          console.log(response)
          setResults(response.data)
    })
  }, []);
  
 
  return (
    <>
      <TotalCasesContext.Provider value={{
        totalCases: results.length
      }}> 
        <BrowserRouter>
          <Container className={classes.container} >
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/cases" component={Cases} />
              <Route exact path="/world_data" component={WorldData} />
              <Route exact path="/report" component={Report} />
              <Route component={Page404} />
            </Switch>
            <Footer />
          </Container>
        </BrowserRouter>
      </TotalCasesContext.Provider>
    </>
  );
}

export default App;
