import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import ListCountries from './ListCountries';
import ChartCountries from './ChartCountries';
import Animation from './Animation';
import worldMap from '../assets/world-map.json';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        width: "100%",
        flexDirection: "column",

        padding: 0,
    },
    titleContainer: {
        display: "Flex",
        height: 450,
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
        padding: 0,
        backgroundColor: "#87d7be",
        [theme.breakpoints.down('sm')]: {
            height: "300px"
        },
    },
    titleContainer2: {
        display: "Flex",
        justifyContent: "flex-start",
        marginBottom: 50,
    },
    title: {
        maxWidth: 500,
        marginRight: 200,
        [theme.breakpoints.down('sm')]: {
            maxWidth: 350,
            marginTop: 0,
            marginRight: 50,
        },
    },
    animation: {
        display: "flex",
        position: "relative",
        marginBottom: 100,
    },
    chartContainer: {
        marginBottom: 100,
    }

}));

const WorldData = () => {
    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (

        <Container className={classes.root} maxWidth={false}>
            <Hidden smDown>
                <Container className={classes.titleContainer}>
                    <Typography className={classes.title} variant="h2" gutterBottom align="right">
                        Conozca los países con Vigilancia Epidemiológica
                    </Typography>
                </Container>
            </Hidden>
            <Hidden mdUp>
                <Container className={classes.titleContainer}>
                    <Typography className={classes.title} variant="h3" gutterBottom>
                        Conozca los países con Vigilancia Epidemiológica
                    </Typography>
                </Container>
            </Hidden>

            <Container maxWidth="lg">
                <ListCountries />
            </Container>

            <Hidden smDown>
                <Container>
                    <div className={classes.animation} >
                        <Animation height={"450px"} width={"100%"} myAnimation={worldMap} />
                    </div>
                </Container>
            </Hidden>
            <Hidden mdUp>
                <Container>
                    <div className={classes.animation} >
                        <Animation height={"330px"} width={"100%"} myAnimation={worldMap} />
                    </div>
                </Container>
            </Hidden>

            <Hidden smDown>
                <Container className={classes.titleContainer2}>
                    <Typography className={classes.title} variant="h2" gutterBottom>
                        Conozca la prevalencia por País
                    </Typography>
                </Container>
            </Hidden>
            <Hidden mdUp>
                <Container className={classes.titleContainer2}>
                    <Typography className={classes.title} variant="h3" gutterBottom>
                        Conozca la prevalencia por País
                    </Typography>
                </Container>
            </Hidden>

            <Container className={classes.chartContainer} maxWidth={false}>
                <ChartCountries />
            </Container>
        </Container>
    )
}

export default WorldData
