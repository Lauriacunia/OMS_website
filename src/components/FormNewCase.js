import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';



const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    form: {
        display: "flex",
        flexDirection: "column",
        '& .MuiTextField-root': {
            width: '25ch',
        },
        margin: 15,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    input: {
        marginBottom: 20,
        minWidth: 180,
    }
});

const handleChange = (event) => {

};

let genres = ["Femenino", "Masculino", "Intersex", "Intersexual",
            "Androginx", "Trans Femenino", "Trans Masculino", 
            "Ninguno", "Otro", "Prefiero no decirlo"]

const FormNewCase = () => {
    const classes = useStyles();

    const [results, setResults] = useState([]);

    useEffect(() => {
        const searchString = `https://restcountries.eu/rest/v2/all`
        fetch(searchString)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setResults(data)
            })
    }, []);

    return (
        <Container className={classes.root} maxWidth="md">
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.subtitle} color="secondary" gutterBottom>
                        Datos Personales
                    </Typography>
                    <form className={classes.form} noValidate autoComplete="off">
                        <TextField className={classes.input}
                            required
                            color="secondary"
                            id="standard-full-width"
                            label="Nombre(s)"
                            placeholder="Ingrese su(s) nombre(s)"
                            helperText="*Campo Obligatorio"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <TextField className={classes.input}
                            required
                            color="secondary"
                            id="standard-full-width"
                            label="Apellido(s)"
                            placeholder="Ingrese su(s) apellido(s)"
                            helperText="*Campo Obligatorio"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <TextField className={classes.input}
                            type="number"
                            color="secondary"
                            id="standard"
                            label="Edad"
                            inputProps={{
                                min: 0,
                                max: 120
                            }}
                            placeholder="Seleccione su edad"
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <FormControl className={classes.input}
                            color="secondary">
                            <InputLabel shrink htmlFor="select genre">
                                Género
                            </InputLabel>
                            <NativeSelect
                                color="secondary"
                                onChange={handleChange}
                                inputProps={{
                                    name: 'country',
                                    id: 'select country',
                                }}
                            >
                                <option value="">None</option>
                                { (genres.map(genre => {
                                    return (
                                        <option value={genre}>{genre}</option>
                                    )
                                }))}         
                            </NativeSelect>
                        </FormControl>

                        <FormControl className={classes.input}
                            color="secondary">
                            <InputLabel shrink htmlFor="select country">
                                País de residencia
                            </InputLabel>
                            <NativeSelect
                                color="secondary"
                                onChange={handleChange}
                                inputProps={{
                                    name: 'country',
                                    id: 'select country',
                                }}
                            >
                                <option value="">Elija una opción</option>
                                {results && (results.map(result => {
                                    return (
                                        <option value={result.name}>{result.name}</option>
                                    )
                                }))}
                            </NativeSelect>
                        </FormControl>

                        <FormControl className={classes.input}
                            color="secondary">
                            <InputLabel shrink htmlFor="Does the patient live?">
                                ¿ El paciente vive ?
                            </InputLabel>
                            <NativeSelect
                                color="secondary"
                                onChange={handleChange}
                                inputProps={{
                                    name: 'country',
                                    id: 'select country',
                                }}
                            >   
                                <option value="">Elija una opción</option>
                                <option value="true">SI</option>
                                <option value="false">NO</option>
                                
                            </NativeSelect>
                        </FormControl>
                    </form>


                </CardContent>
                <CardActions>
                    <Button type="submit" size="small" color="secondary">ENVIAR</Button>
                </CardActions>
            </Card>

        </Container >
    )
}

export default FormNewCase
