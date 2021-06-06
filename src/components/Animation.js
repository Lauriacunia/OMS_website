import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from '../assets/world-map.json';
 
const Animation = ({height, width}) => {
 
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData.default,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return (
           <Lottie options={defaultOptions}
                height={height}
                width={width}
           />       
      )
  
};

export default Animation