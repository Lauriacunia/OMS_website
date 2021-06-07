import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ListCountries from './ListCountries';
import ChartCountries from './ChartCountries';
import Typography from '@material-ui/core/Typography';
import Animation from './Animation';
import worldMap from '../assets/world-map.json';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: "column",
      justifyContent: 'center',
      alignItems: "center",
      marginTop:20,
      marginBottom: 20,
    },
  }));

const WorldData = () => {
    const classes = useStyles();
    return (
        <>
            <Container className={classes.root} maxWidth="lg">
                <Typography variant="h4" gutterBottom>
                    Conozca todos los países donde se registran casos positivos de COVID-19
                </Typography>
                <Animation height={"430px"} width={"70vw"} myAnimation={worldMap} />
                <ListCountries />
            </Container>
            <ChartCountries />
        </>
    )
}

export default WorldData
