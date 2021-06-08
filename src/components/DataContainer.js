import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    textContainer: {
        display: "flex",
        flexDirection: "column",
        maxWidth: "30vw"
    },
    titulo: {
        color: "white",
    },

});

const DataContainer = ({ title, description }) => {
    const classes = useStyles();

    return (
        <div className={classes.textContainer} >
            <Typography className={classes.titulo}
                variant="h1" gutterBottom>
                {title}
            </Typography>
            <Typography className={classes.titulo}
                variant="body1" gutterBottom>
                {description}
            </Typography>
        </div>
    )
}

export default DataContainer
