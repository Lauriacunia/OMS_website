import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import {
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  makeStyles,
  Drawer,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import PublicIcon from '@material-ui/icons/Public';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const useStyles = makeStyles(theme => ({
  drawerContainer: {},
  iconButtonContainer: {
    color: 'white',
  },

  menuIconToggle: {
    fontSize: '3rem',
  },
}));

const Sidebar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  
      return (
        <>
          <Drawer
            anchor='left'
            classes={{ paper: classes.drawerContainer }}
            onClose={() => setOpenDrawer(false)}
            open={openDrawer}
            onOpen={() => setOpenDrawer(true)}>
            <List>
              <ListItem divider 
                        button 
                        onClick={() => {
                          setOpenDrawer(false)
                          history.push(`/`)
                        }}>
                <ListItemIcon><HomeIcon/></ListItemIcon>
                  <ListItemText>HOME</ListItemText>
              </ListItem>

              <ListItem divider 
                         button 
                         onClick={() => {
                          setOpenDrawer(false)
                          history.push(`/cases`)
                        }}>
                <ListItemIcon><GroupIcon /></ListItemIcon>
                  <ListItemText>CASOS</ListItemText>
              </ListItem>

              <ListItem divider
                        button 
                        onClick={() => {
                          setOpenDrawer(false)
                          history.push(`/world_data`)
                        }}>
                <ListItemIcon><PublicIcon/></ListItemIcon>
                  <ListItemText>ESTADÍSTICAS</ListItemText>
              </ListItem>

              <ListItem divider 
                        button 
                        onClick={() => {
                          setOpenDrawer(false)
                          history.push(`/report`)
                        }}>
                <ListItemIcon><PersonAddIcon/></ListItemIcon>
                  <ListItemText>REPORTE</ListItemText>
              </ListItem>
            </List>
          </Drawer>
          <IconButton
            className={classes.iconButtonContainer}
            onClick={() => setOpenDrawer(!openDrawer)}
            disableRipple>
            <MenuIcon className={classes.menuIconToggle} />
          </IconButton>
        </>
      );
    };

export default Sidebar;
