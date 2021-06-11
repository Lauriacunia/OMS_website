import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const Imagen = ({ ruta, ancho, alto }) => {
    const useStyles = makeStyles({
        imgContainer: {
            display: "flex",
            padding: 0,
            width: `${ancho}px`,
            height: `${alto}px`,
        },
        img: {
            width: "100%",
        }
    });

    const classes = useStyles();
    return (
        <Container className={classes.imgContainer}>
            <img className={classes.imgContainer}
                src={ruta}
                alt="img"
            />
        </Container>
    );
}

export default Imagen