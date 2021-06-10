import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import DataContainer from './DataContainer';

const useStyles = makeStyles({
    root: {
        display: "flex",
        height: "600px",
        padding: 0,
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center-top",
        backgroundImage: `url(https://live.staticflickr.com/65535/51075135278_318c1ac2bf_h.jpg)`
    },
    dataContainer: {
        display: "flex",
        backgroundColor: "transparent",
        width: "80vw",
        zIndex: 5,
    },
    overlay: {
        display: "flex",
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        backgroundColor: "black",
        opacity: 0.4,
    },
});

const Hero = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root} maxWidth="false"> 
            <Container className={classes.overlay} maxWidth="false"></Container>
            <Container className={classes.dataContainer} maxWidth="false">
                <DataContainer title={"Situación Epidemiológica Coronavirus"}
                               description={`Conozca las novedades del avance de la pandemia de COVID-19`} />
            </Container>
        </Container>
    )
}

export default Hero
