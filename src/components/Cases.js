import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TableCases from './TableCases';
import ChartPandemicEvolution from "./ChartPandemicEvolution";
import Animation from './Animation';
import search from '../assets/search.json';

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        marginTop: 20,
    },

});

const Cases = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root} maxWidth="lg">
            <Typography variant="h4" gutterBottom>
                Conozca el listado de casos positivos registrados de COVID-19
            </Typography>
            <Animation height={"auto"} width={500} myAnimation={search} />
            <TableCases />
            <ChartPandemicEvolution />
        </Container>
    )
}

export default Cases
