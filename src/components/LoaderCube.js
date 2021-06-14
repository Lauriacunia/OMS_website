import React, { useState, useEffect } from 'react';
import { ScatterBoxLoader } from "react-awesome-loaders";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 5,
  },
  overlay: {
    display: "flex",
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "#f1f7ee",
    opacity: 0.4,
  },
});

const LoaderCube = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.overlay}></div>
      <ScatterBoxLoader className={classes.loader}
        primaryColor={"#87d7be"}
        background={"transparent"}
      />
    </div>
  )
}

export default LoaderCube
