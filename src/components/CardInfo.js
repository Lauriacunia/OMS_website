import React from "react";
import { useHistory } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Imagen from './Imagen';


const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        padding: 0,
        maxWidth: 600,
        margin: 100,
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 20,
          alignItems: "center",
          margin: '20px 0px',
        },
    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
        marginLeft:100,
        [theme.breakpoints.down('sm')]: {
          marginLeft: 0,
          marginTop:30,
          alignItems: "center",
          justifyContent: 'center',
        },
    },
    description: {
        color: "#557e76",
    },
    btnContainer: {
        display: "flex",
        justifyContent: 'center',
        marginTop:50,
        [theme.breakpoints.down('sm')]: {
          marginTop:20,
        },
    }
}));

const CardInfo = ({img, txt, description, ruta}) => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <Container className={classes.root}>
            <Hidden xsDown>
               <Imagen ruta={img} ancho={"500"} alto={"300"}/>
            </Hidden>
            <Hidden smUp>
               <Imagen ruta={img} ancho={"300"} alto={"180"}/>
            </Hidden>
            <div className={classes.textContainer}>
              <Typography className={classes.title} align="center" variant="h3" gutterBottom>
                {txt}
              </Typography>
              <Typography className={classes.description} align="center" variant="body2" gutterBottom>
                {description}
              </Typography>
              <Container className={classes.btnContainer} >
                <Button color="primary" size="small" 
                        onClick={() => { history.push(ruta)}} >
                        ver mas
                </Button>
              </Container>  
            </div>           
        </Container>
    )
}

export default CardInfo
