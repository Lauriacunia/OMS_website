import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ListCountries from './ListCountries';
import ChartCountries from './ChartCountries';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      marginTop:30,
      marginBottom: 50,
    },
  }));

const WorldData = () => {
    const classes = useStyles();
    return (
        <>
            <Container className={classes.root} maxWidth="lg">
                <ListCountries />
            </Container>
            <ChartCountries />
        </>
    )
}

export default WorldData
