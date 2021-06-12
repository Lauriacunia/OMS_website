import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ModalSuccess from './ModalSuccess';


let genres = ["Femenino", "Masculino", "Intersex", "Intersexual",
            "Androginx", "Trans Femenino", "Trans Masculino", 
            "Ninguno", "Otro", "Prefiero no decirlo"]

const initialForm = {
    first_name: "",
    last_name: "",
    country: "",
    live: 1,
    age: 0,
    female: false,
} 

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
    },
    btnContainer: {
        display: "flex",
        justifyContent: "flex-end",
    },
});


const FormNewCase = () => {
    const classes = useStyles();
    const [countries, setCountries] = useState([]);
    const [form, setForm] = useState(initialForm); 
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = (e) => {
            e.preventDefault(); 

            axios.post('https://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/infected', form)
            .then(response => {
                console.log(response)
                setOpen(true) 
                setForm(initialForm)    
            })

    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.id]:e.target.value
        })
    }
    const handleChangeGenre = (e) => {
        e.target.value === "Femenino" 
        ? (
            setForm({
                ...form,
                [e.target.id]: true
            })
        )
        : (
            setForm({
                ...form,
                [e.target.id]: false
            })
        )
    }

    const handleChangeLive = (e) => {
        e.target.value === "si" 
        ? (
            setForm({
                ...form,
                [e.target.id]: 1
            })
        )
        : (
            setForm({
                ...form,
                [e.target.id]: 0
            })
        )
    }

    const handleChangeAge = (e) => {
            setForm({
                ...form,
                [e.target.id]: parseInt(e.target.value)
            })
    }

    useEffect(() => {
        const searchString = `https://restcountries.eu/rest/v2/all`
        axios.get(searchString)
            .then(response => {
                console.log(response.data)
                setCountries(response.data)
            })
    }, []);

   
    
    return (
        <Container className={classes.root} maxWidth="md">
            <Card>
                <CardContent>
                    <Typography className={classes.subtitle} color="secondary" gutterBottom>
                        Datos Personales
                    </Typography>
                    <form className={classes.form}
                          onSubmit={handleSubmit}
                          autoComplete="off">
                        <TextField 
                            className={classes.input}
                            onChange={handleChange}
                            id="first_name"
                            required
                            color="secondary"
                            label="Nombre"
                            placeholder="Ingrese su primer nombre"
                            helperText="*Campo Obligatorio"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField 
                            className={classes.input}
                            onChange={handleChange}
                            id="last_name"
                            required
                            color="secondary"
                            label="Apellido"
                            placeholder="Ingrese su primer apellido"
                            helperText="*Campo Obligatorio"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <TextField className={classes.input}
                            type="number"
                            onChange={handleChangeAge}
                            id="age"
                            readOnly
                            color="secondary"
                            label="Edad"
                            inputProps={{
                                min: 0,
                                max: 130
                            }}
                            placeholder="Seleccione su edad"
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <FormControl 
                            className={classes.input}
                            color="secondary">
                            <InputLabel shrink htmlFor="select genre">
                                Género
                            </InputLabel>
                            <NativeSelect
                                onChange={handleChangeGenre}
                                color="secondary"
                                inputProps={{
                                    name: 'female',
                                    id: 'female',
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
                                onChange={handleChange}
                                color="secondary"
                                inputProps={{
                                    name: 'country',
                                    id: 'country',
                                }}
                            >
                                <option value="">Elija una opción</option>
                                {countries && (countries.map(country => {
                                    return (
                                        <option value={country.name}>{country.name}</option>
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
                                onChange={handleChangeLive}
                                color="secondary"
                                inputProps={{
                                    name: 'live',
                                    id: 'live',
                                }}
                            >   
                                <option value="">Elija una opción</option>
                                <option value="si">SI</option>
                                <option value="no">NO</option>
                                
                            </NativeSelect>
                        </FormControl>
                        <div className={classes.btnContainer}>
                            <Button  type="submit" 
                             variant="contained"
                             size="large" 
                             color="secondary"
                             startIcon={<CloudUploadIcon />}
                             >ENVIAR</Button>
                        </div>
                    </form>
                </CardContent>     
            </Card>
            <ModalSuccess open={open} handleOpen={handleOpen} handleClose={handleClose}/>
        </Container >
    )
}

export default FormNewCase
