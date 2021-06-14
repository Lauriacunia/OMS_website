import React from "react";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CardInfo from "./CardInfo"

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: 'column',
        padding: 0,
        justifyContent: "center",
        alignItems: "center",
    },

}));


const Info = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root} maxWidth="lg">
            <CardInfo img={`https://user-images.githubusercontent.com/63796774/121197935-1b878980-c848-11eb-9815-16452c29eedb.png`}
                txt={`Casos Positivos`}
                description={`Conozca el listado de casos positivos COVID-19 reportados en el mundo`}
                ruta={`/cases`} />
            <CardInfo img={`https://user-images.githubusercontent.com/63796774/121197554-c8153b80-c847-11eb-8c93-036d329915b5.png`}
                txt={`Estadísticas`}
                description={`Explore las estadísticas de la evolución de la pandemia`}
                ruta={`/world_data`} />
            <CardInfo img={`https://user-images.githubusercontent.com/63796774/121197663-debb9280-c847-11eb-843c-4c3ac1e4186f.png`}
                txt={`Reporte`}
                description={`Colabore reportando casos positivos detectados en su lugar de residencia`}
                ruta={`/report`} />
        </Container>
    )
}

export default Info
