import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const SwitchOrderByAge = ({queryParams, setQueryParams}) => {
    const [state, setState] = React.useState({
      age: false,
    });

const handleChangeSwitch = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    console.log(queryParams)
    queryParams 
    ? setQueryParams(``)
    : setQueryParams(`?orderBy=age`)
};

    
  
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Ordenar Por Edad</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={state.age} onChange={handleChangeSwitch} name="age" />}
          label="Age"
        />    
      </FormGroup>
    </FormControl>
  );
}

export default SwitchOrderByAge
