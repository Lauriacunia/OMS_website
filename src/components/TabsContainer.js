import React from 'react';
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
    color: "#fff"
  },
  tabs: {
    color: "#fff",
    backgroundColor: "transparent",
  },
  tab: {
    color: "#fff",
    backgroundColor: "transparent",
  }

}));

const TabsContainer = () => {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Tabs className={classes.tabs}
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
              indicatorColor="primary"
              textColor="primary"
               >
          <Tab className={classes.tabs}
               onClick={() => { history.push(`/`) }}
               label="home"
               {...a11yProps(0)} />
          <Tab className={classes.tabs}
               onClick={() => { history.push(`/cases`) }}
               label="seguimiento" 
               {...a11yProps(1)} />
          <Tab className={classes.tabs}
               onClick={() => { history.push(`/world_data`) }}
               label="estadísticas " 
               {...a11yProps(2)} />
          <Tab className={classes.tabs}
               onClick={() => { history.push(`/report`) }}
               label="reporte" 
               {...a11yProps(3)} />
        </Tabs>
      </AppBar>
    </div>
  );
}

export default TabsContainer



       {/* <Tab className={classes.tab}
            onClick={() => { history.push(`/`) }}
            label="inicio"
            icon={<HomeIcon />}
            {...a11yProps(0)} />
          <Tab className={classes.tab}
            onClick={() => { history.push(`/cases`) }}
            label="casos"
            icon={<GroupIcon />}
            {...a11yProps(1)} />
          <Tab className={classes.tab}
            onClick={() => { history.push(`/world_data`) }}
            label="estadísticas "
            icon={<PublicIcon />}
            {...a11yProps(2)} />
          <Tab className={classes.tab}
            onClick={() => { history.push(`/report`) }}
            label="reporte un caso"
            icon={<PersonAddIcon />}
            {...a11yProps(3)} /> */}
        {/* </Tabs> */}
  
