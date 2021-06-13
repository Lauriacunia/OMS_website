import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import TotalCasesContext from '../context/TotalCasesContext';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
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
    minWidth: 100,
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
    minWidth: 300,
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
  const {totalCases} = useContext(TotalCasesContext);

  return (
    <>
      <AppBar className={classes.root} position="sticky">
        <Toolbar>
          <Hidden mdUp>
              <Sidebar />
          </Hidden>
          <Container className={classes.logoContainer} maxWidth={false}>
            <a href='https://www.paho.org/es' target="_blank" rel="noreferrer" >
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

          <Container className={classes.qtyContainer} maxWidth={false}>   
              <Typography className={classes.qtyTxtContainer} align="center" variant="body2" gutterBottom>
                  {`COVID-19:  ${totalCases} casos`}
              </Typography>
          </Container>    
        </Toolbar>
      </AppBar>
     
    </>
  );
}

export default NavBar
