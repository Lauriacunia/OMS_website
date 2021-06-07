import React, { useState, useEffect } from "react";
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


    return (
        <>
            <Container className={classes.root} maxWidth="lg">
                <Typography variant="h4" gutterBottom>
                    Reporte un nuevo caso positivo de COVID-19
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Si usted desea informar un caso con diagnóstico positivo de COVID-19 
                    le solicitamos que colabore con nuestros registros 
                    completando el siguiente formulario.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Los datos personales del paciente serán utilizados solo con fines
                    de Vigilancia Epidemiológica.
                </Typography>
                <FormNewCase />
            </Container>
        </>
    )
}

export default Report


