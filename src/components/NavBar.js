import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TabsContainer from './TabsContainer';
import Imagen from './Imagen';
import Animation from './Animation';
import mask from '../assets/mask.json';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "black",
  },
  navbar: {
    backgroundColor: "transparent",
  },
  logo: {
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
    minWidth: 250,
    padding: 10,
    border: "2px solid white",
    borderRadius: 10,
  }

}));


const NavBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const [results, setResults] = useState([]);
  let cases;
  
  useEffect(() => {
    const searchString = `http://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/infected`
    fetch(searchString)
      .then(res => res.json())
      .then(data => {
        setResults(data)
      })
  }, []);
  
  const setCases = () =>{
     cases = results.length
  }

  return (
    <>
    {results && setCases()}

    <div className={classes.root}> 
      <AppBar className={classes.navbar} position="sticky">
        <Toolbar>
          <Hidden smUp>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Imagen className={classes.logo}
            ruta={"https://user-images.githubusercontent.com/63796774/120896551-7c208780-c5f8-11eb-88ba-608f6d9dfe59.png"}
            ancho={"70"}
            alto={"70"}
            onClick={() => { history.push("/") }} />
          <TabsContainer />
          <div className={classes.animationContainer}>
            <Animation height={100} width={100} myAnimation={mask} />
          </div>
          
          <div className={classes.qtyContainer}>
            <Typography variant="body1" gutterBottom>
                 {`Total de casos registrados: ${cases}`}
            </Typography>       
          </div>
        </Toolbar>
      </AppBar>
    </div>
    </>
  );
}

export default NavBar
