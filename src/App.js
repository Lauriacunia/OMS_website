import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter,
  Route,
  Switch,
}
  from 'react-router-dom'
import 'fontsource-roboto';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Cases from './components/Cases';
import Report from './components/Report';
import WorldData from './components/WorldData';
import Footer from './components/Footer';

const useStyles = makeStyles({
  "@global": {
    body: {
      margin: 0,
      padding: 0,
    }
  },
  container: {
    backgroundColor: "white",
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.container}>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cases" component={Cases} />
          <Route exact path="/world_data" component={WorldData} />
          <Route exact path="/report" component={Report} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
