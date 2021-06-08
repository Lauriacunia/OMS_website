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
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        marginBottom: 20,
        marginTop: 20,
    },
    titleContainer: {
        display: "Flex",
        justifyContent: "flex-end",
        height: 450,
        backgroundImage: `url(https://user-images.githubusercontent.com/63796774/121233113-ac6e5d00-c868-11eb-9236-5ec77bb0246e.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center-top",
    },
    title: {
        marginRight:150,
        maxWidth: 450,
        marginTop: 30,
    },
    animation: {
        display: "flex",
        position: "relative",
        marginBottom: 100,
    },
   
  }));

const WorldData = () => {
    const classes = useStyles();
    return (
       
        <div className={classes.root} >
            <div className={classes.titleContainer}>
                <Typography className={classes.title} variant="h2" gutterBottom>
                    Conozca todos los países donde se registran casos positivos de COVID-19
                </Typography>
            </div>
            <Container maxWidth="lg">
                 <ListCountries /> 
                 <div className={classes.animation} >
                    <Animation height={"430px"} width={"70vw"} myAnimation={worldMap} />
                 </div>     
            </Container>
            <ChartCountries />
        </div>
        
    )
}

export default WorldData
