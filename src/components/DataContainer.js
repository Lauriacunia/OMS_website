import React from "react";
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    textContainer: {
        display: "flex",
        flexDirection: "column",
    },
    titulo: {
        color: "white",
    },

});

const DataContainer = ({ title, description }) => {
    const classes = useStyles();

    return (
        <Container className={classes.textContainer}>
            <Typography className={classes.titulo}
                variant="h4" gutterBottom>
                {title}
            </Typography>
            <Typography className={classes.titulo}
                variant="body1" gutterBottom>
                {description}
            </Typography>
        </Container>
    )
}

export default DataContainer
