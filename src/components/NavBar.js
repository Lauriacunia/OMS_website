import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TabsContainer from './TabsContainer';
import Imagen from './Imagen';
import Sidebar from './Sidebar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: "black",
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: "flex-start",
    maxWidth: 100,
    padding: 0,
    cursor: "pointer",
    '&:hover': {
      transform: `scale(1.2)`
    }
  },
  animationContainer: {
    marginRight: 5,
    marginLeft: 5,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  qtyContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 300,
    padding:5,
    border: "1px solid white",
    borderRadius: 30,
    color: "#ffffff",
  },
  qtyTxtContainer:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 10px"
  }

}));





const NavBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const [results, setResults] = useState([]);
  let cases;

  
  useEffect(() => {
    const searchString = `https://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/infected`
    axios.get(searchString)
         .then(response => {
          console.log(response)
          setResults(response.data)
    })
  }, []);
  
  const setCases = () =>{
     cases = results.length
  }

  return (
    <>
    {results && setCases()}
      <AppBar className={classes.root} position="sticky">
        <Toolbar>
          <Hidden mdUp>
              <Sidebar />
          </Hidden>
          <Container className={classes.logoContainer} maxWidth="false">
            <a href='https://www.paho.org/es' target="_blank">
              <Imagen 
                ruta={"https://user-images.githubusercontent.com/63796774/120896551-7c208780-c5f8-11eb-88ba-608f6d9dfe59.png"}
                ancho={"70"}
                alto={"70"}
                onClick={() => { history.push("/") }} />
            </a>
          </Container>
         

          <Hidden smDown>
            <TabsContainer />
          </Hidden>

          <Container className={classes.qtyContainer} maxWidth="false">   
              <Typography className={classes.qtyTxtContainer} align="center" variant="body2" gutterBottom>
                  {`COVID-19:  ${cases} casos`}
              </Typography>
          </Container>    
        </Toolbar>
      </AppBar>
     
    </>
  );
}

export default NavBar
