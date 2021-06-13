import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  listContainer: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: "center",
    marginTop:50,
    marginBottom: 50,
  },
  chip: {
      margin:10,
      [theme.breakpoints.down('sm')]: {
        margin:5,
      },
  }
}));


const ListCountries = () => { 
    const classes = useStyles();
    const [results, setResults] = useState([]);

    useEffect(() => {
        const searchString = `https://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/countries`
        axios.get(searchString)
          .then(response => {
            setResults(response.data)
          })
      }, []);

    return (
        <>
        <Container className={classes.listContainer}
                   maxWidth="md">
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
