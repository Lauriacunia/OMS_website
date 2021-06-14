import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import FormNewCase from './FormNewCase';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20,
    },
}));


const Report = () => {
    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Container className={classes.root} maxWidth="md">
                <Typography variant="h4" gutterBottom align="center">
                    Reporte un nuevo caso positivo de COVID-19
                </Typography>
                <Typography variant="body1" gutterBottom align="center">
                    Si usted desea colaborar con las estadísticas de la OPS/OMS
                    le solicitamos complete el siguiente formulario.
                </Typography>
                <Typography variant="body1" gutterBottom align="center">
                    Los datos personales del paciente serán utilizados solo con fines
                    de Vigilancia Epidemiológica.
                </Typography>
                <FormNewCase />
            </Container>
        </>
    )
}

export default Report


