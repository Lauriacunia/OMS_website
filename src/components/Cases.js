import React, { useRef, useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TableCases from './TableCases';
import ChartPandemicEvolution from "./ChartPandemicEvolution";


const useStyles = makeStyles({
    root: {
      marginBottom: 20,
      marginTop: 20,
    },
  
});

  
const Cases = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root} maxWidth="md">
            <TableCases />
            <ChartPandemicEvolution />
        </Container>
    )
}

export default Cases
