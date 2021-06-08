import React from 'react';
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import PublicIcon from '@material-ui/icons/Public';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
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

const a11yProps = (index) => {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: "transparent",
    color: "#ffffff",
  },
  tabs: {
    backgroundColor: "transparent",
    paddingBottom: 10,
  },
  tab: {
    '&:hover': {
      transform: `scale(1.1)`
    },
    color: "#ffffff",
  }
}));

const TabsContainer = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.tabs} position="static" color="primary">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="#ffffff"
          aria-label="scrollable force tabs example"
        >
          <Tab className={classes.tab}
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
            {...a11yProps(3)} />
        </Tabs>
      </AppBar>
    </div>
  );
}
export default TabsContainer