import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import DataContainer from './DataContainer';

const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        height: "600px",
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center-top",
        backgroundImage: `url(https://live.staticflickr.com/65535/51075135278_318c1ac2bf_h.jpg)`
    },
    dataContainer: {
        display: "flex",
        backgroundColor: "transparent",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "80vw",
        margin: "100px",
        zIndex: 5,
    },
    overlay: {
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
        <div className={classes.root}>
            <div className={classes.overlay}></div>
            <div className={classes.dataContainer}>
                <DataContainer title={"Situación Epidemiológica Coronavirus (COVID-19)"}
                    description={`Conozca las novedades del avance de enfermedad en el mundo`} />
            </div>
        </div>
    )
}

export default Hero
