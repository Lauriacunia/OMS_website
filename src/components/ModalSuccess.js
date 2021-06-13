import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Lottie from 'react-lottie';
import IconButton from '@material-ui/core/IconButton';
import success from '../assets/success.json';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
        display:"flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: 'absolute',
        width: 300,
        backgroundColor: "#f1f7ee",
        padding: 15,
  },
  btnCloseContainer: {
    display:"flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
  },
  text: {
      marginTop: 20,
  }
}));
const defaultOptions = {
    loop: false,
    autoplay: true, 
    animationData: success,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

const ModalSuccess = ({open, handleOpen, handleClose}) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  

  const body = (
    <Card style={modalStyle} className={classes.paper}>
        <div className={classes.btnCloseContainer}>
            <IconButton 
                        onClick={handleClose}
                        color= "primary" 
                        aria-label="delete">
               <HighlightOffIcon />
            </IconButton>
        </div>
         <Lottie options={defaultOptions}
                 height= "80px"
                 width= "80px"
           /> 
      <Typography className={classes.text} 
                  variant="body1" 
                  gutterBottom 
                  aling="center">
        Gracias por enviar el formulario
      </Typography>
      
    </Card>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default ModalSuccess