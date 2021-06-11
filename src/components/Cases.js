import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import TableCases from './TableCases';
import ChartPandemicEvolution from "./ChartPandemicEvolution";
import Animation from './Animation';
import people from '../assets/people.json';

const useStyles = makeStyles(theme =>({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 20,
        marginTop: 20,
    },
    titleContainer: {
        display: "Flex",
        height: 450,
        backgroundImage: `url(https://user-images.githubusercontent.com/63796774/121225139-9c9e4b00-c85f-11eb-827f-5b3e360e67f1.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center-top",
        [theme.breakpoints.down('sm')]: {
            height: "300px"
          },
    },
    title: {
        maxWidth: 450,
        [theme.breakpoints.down('sm')]: {
            maxWidth: 300,
          },
    },
}));

const Cases = () => {
    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <Container className={classes.root} maxWidth="false"> 
             <Hidden smDown>
                 <Container className={classes.titleContainer} maxWidth="false" >
                     <Typography  className={classes.title} variant="h2" gutterBottom>
                     Conozca el listado de casos positivos registrados de COVID-19
                     </Typography>
                 </Container>
             </Hidden>
             <Hidden mdUp>
                 <Container className={classes.titleContainer} maxWidth="false" >
                     <Typography  className={classes.title} variant="h3" gutterBottom>
                     Conozca el listado de casos positivos registrados de COVID-19
                     </Typography>
                 </Container>
             </Hidden>

             <Hidden smDown>
                <Container maxWidth="md">
                    <Animation height={"auto"} width={500} myAnimation={people} />
                </Container>
             </Hidden>
             <Hidden mdUp>
                <Container maxWidth="xs">
                    <Animation height={"auto"} width={300} myAnimation={people} />
                </Container>
             </Hidden>

             <Hidden smDown>
                <Container maxWidth="md">
                    <TableCases />
                </Container>
             </Hidden>

             <Hidden mdUp>
                <Container maxWidth="sm">
                    <TableCases />
                </Container>
             </Hidden>

             <Hidden smDown>
                <Container maxWidth="md">
                    <Typography  className={classes.title} variant="h2" gutterBottom>
                        Conozca la incidencia de casos positivos COVID-19 de éste mes
                    </Typography>
                </Container>
             </Hidden>

             <Hidden mdUp>
                <Container maxWidth="sm">
                    <Typography  className={classes.title} variant="h3" gutterBottom>
                        Conozca la incidencia de casos positivos COVID-19 de éste mes
                    </Typography> 
                </Container>
             </Hidden>  

             <Hidden smDown>
                 <Container maxWidth="md">
                    <ChartPandemicEvolution />
                 </Container>
             </Hidden>
             <Hidden mdUp>
                 <Container maxWidth="sm">
                    <ChartPandemicEvolution />
                 </Container>
             </Hidden>
            
            

                
        </Container>
    )
}

export default Cases
