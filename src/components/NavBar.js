import React from 'react';
import { useHistory} from 'react-router-dom'
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TabsContainer from './TabsContainer';
import Imagen from './Imagen';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "black",
  },
  navbar: {
    backgroundColor:"transparent",
    
  },
  logo:{
      cursor: "pointer",
      '&:hover': {
        transform: `scale(1.2)`}
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


const NavBar = () => {
    const classes = useStyles();
    const history = useHistory();
    return (
 
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
                        onClick = {()=> { history.push("/")}} /> 
                    <TabsContainer />             
                </Toolbar>
            </AppBar>
        </div>
  
    );
}

export default NavBar
