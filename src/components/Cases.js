import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TableCases from './TableCases';
import ChartPandemicEvolution from "./ChartPandemicEvolution";
import Animation from './Animation';
import people from '../assets/people.json';

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        marginBottom: 20,
        marginTop: 20,
    },
    titleContainer: {
        display: "Flex",
        height: 450,
        backgroundImage: `url(https://user-images.githubusercontent.com/63796774/121225139-9c9e4b00-c85f-11eb-827f-5b3e360e67f1.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center-top",
    },
    title: {
        maxWidth: 450,
        marginLeft: 200,
        marginTop: 50,
    },
  

});

const Cases = () => {
    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className={classes.root} >
            <div className={classes.titleContainer}>
                <Typography  className={classes.title} variant="h2" gutterBottom>
                    Conozca el listado de casos positivos registrados de COVID-19
                </Typography>
            </div>
            <Container maxWidth="md">
                <Animation height={"auto"} width={500} myAnimation={people} />
                <TableCases />
                <ChartPandemicEvolution />
            </Container>
        </div>
    )
}

export default Cases
