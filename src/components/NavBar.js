import React, { useState, useEffect } from "react";
import axios from 'axios'
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 300,
    padding:5,
    border: "1px solid white",
    borderRadius: 30,
    color: "#ffffff",
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
          
          <div className={classes.qtyContainer}>
          <div className={classes.animationContainer}>
            <Animation height={40} width={40} myAnimation={mask} />
          </div>
            <Typography variant="body2" gutterBottom>
                 {`Prevalencia COVID-19: `}
                 <span style={{ color: '#fff952' }}>{`${cases} `}</span>
                 {`casos`}
            </Typography>       
          </div>
        </Toolbar>
      </AppBar>
    </div>
    </>
  );
}

export default NavBar
