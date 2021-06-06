import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ListCountries from './ListCountries';
import ChartCountries from './ChartCountries';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
  }));

const WorldData = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root} maxWidth="lg">
            <ListCountries />
            <ChartCountries />
        </Container>
    )
}

export default WorldData
