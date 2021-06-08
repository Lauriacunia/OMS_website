import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Animation from './Animation';
import page404 from '../assets/page404.json';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        display: "flex",
        position: "relative",       
        flexDirection: "column",
        right: 100,
        maxWidth: 350,    
    },

});

const Page404 = () => {
    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div>
            <div className={classes.root} >
                <Container maxWidth="lg">
                    <Animation height={"auto"} width={500} myAnimation={page404} />
                </Container>
                <div className={classes.text} >
                    <Typography className={classes.text} variant="h4" gutterBottom>
                            Lo sentimos, no pudimos hallar la pagina solicitada.
                    </Typography>
                    <Button color="secondary" size="small" 
                            onClick={() => { history.push("/")}} >
                            volver al inicio
                    </Button> 
                </div> 
            </div>
            
       </div>
        
    )
}

export default Page404
