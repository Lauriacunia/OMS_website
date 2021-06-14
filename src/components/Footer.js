import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const useStyles = makeStyles((theme) => ({
    footerContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 200,
        marginTop: 50,
        backgroundColor: "black",
        color: "white",
    },
    iconsContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        color: "white",
        fontSize: 20,
    },
    icon1: {
        fontSize: 40,
    },
    icon2: {
        fontSize: 50,
    },

}));

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footerContainer}>
            <Typography
                variant="h6" gutterBottom>
                {"Sitio realizado por Laura Acuña"}
            </Typography>
            <Typography
                variant="body1" gutterBottom>
                {"FullStack developer"}
            </Typography>
            <div className={classes.iconsContainer}>
                <a href="https://github.com/Lauriacunia" target="_blank" rel="noreferrer">
                    <IconButton color="primary"
                        aria-label="add an alarm">
                        <GitHubIcon className={classes.icon1} />
                    </IconButton>
                </a>
                <a href="https://www.linkedin.com/in/lauriacunia/" target="_blank" rel="noreferrer">
                    <IconButton color="primary"
                        aria-label="add an alarm">
                        <LinkedInIcon className={classes.icon2} />
                    </IconButton>
                </a>

            </div>
        </div>
    )
}

export default Footer
