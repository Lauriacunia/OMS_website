import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Imagen = ({ruta, ancho, alto}) => {   
    const useStyles = makeStyles({
        imgContainer: {
          display:"flex",
          width:`${ancho}px`,
          height: `${alto}px`,
        },
        img: {
            width:"100%",
        }
    });

const classes = useStyles();
    return (
            <div className={classes.imgContainer}>
                <img className={classes.imgContainer}
                    src = {ruta}
                />
            </div>
    );
}

export default Imagen 