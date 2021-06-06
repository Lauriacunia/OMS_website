import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Animation from './Animation';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  listContainer: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 50,
  },
  chip: {
      margin:10,
  }
}));


const ListCountries = () => { 
    const classes = useStyles();
    const [results, setResults] = useState([]);

    useEffect(() => {
        const searchString = `http://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/countries`
        fetch(searchString)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            setResults(data)
          })
      }, []);

    return (
        <>

        <Container className={classes.listContainer}
                   maxWidth="lg">
            <Typography variant="h4" gutterBottom>
                Conoce todos los países donde se registran casos positivos de COVID-19
            </Typography>
            <Animation height={"auto"} width={"80vw"} />

            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                >
                {results.map(result => 
                                {
                                return (
                                    <Chip className={classes.chip}
                                        icon={<PersonPinIcon />}
                                        label={result.name}
                                        color="secondary"
                                        variant="outlined"
                                    />
                                )
                })}              
            </Grid>
        </Container>
        </>
        
    )
}

export default ListCountries
