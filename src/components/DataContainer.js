import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme =>({
    textContainer: {
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down('md')]: {
            margin: '20px 0px',
          },
    },
    titulo: {
        color: "white",
    },
}));

const DataContainer = ({ title, description }) => {
    const classes = useStyles();

    return (
        <Container className={classes.textContainer} maxWidth={false}>
             <Hidden smDown>
                <Typography className={classes.titulo}
                            variant="h1" gutterBottom>
                            {title}
                </Typography>
             </Hidden>
             <Hidden mdUp>
                <Typography className={classes.titulo}
                            variant="h2" gutterBottom>
                            {title}
                </Typography>
             </Hidden>
            <Typography className={classes.titulo}
                        variant="body1" gutterBottom>
                        {description}
            </Typography>
        </Container>
    )
}

export default DataContainer
