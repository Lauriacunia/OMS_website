import React from "react";
import { useHistory } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Imagen from './Imagen';

const useStyles = makeStyles({
    root: {
        display: "flex",
        maxWidth: 600,
        margin: 100,
    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
        marginLeft:100,
    },
    description: {
        color: "#557e76",
    },
    btnContainer: {
        display: "flex",
        marginTop:50,
    }

});

const CardInfo = ({img, txt, description, ruta}) => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div className={classes.root}>
            <Imagen ruta={img} ancho={"500"} alto={"300"}/>
            <div className={classes.textContainer}>
              <Typography className={classes.title} variant="h3" gutterBottom>
                {txt}
              </Typography>
              <Typography className={classes.description} variant="body2" gutterBottom>
                {description}
              </Typography>
              <div className={classes.btnContainer} >
                <Button color="secondary" size="small" 
                        onClick={() => { history.push(ruta)}} >
                        ver mas
                </Button>
              </div>  
            </div>
            
            
        </div>
    )
}

export default CardInfo
