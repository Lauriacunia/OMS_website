import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Hero from './Hero';
import Info from './Info';

const useStyles = makeStyles({
    root: {
        padding: 0,
    },
});

const Home = () => {
    const classes = useStyles();
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <Container className={classes.root} maxWidth="false">
            <Hero />
            <Info />
        </Container>
    )
}
export default Home
