import React from 'react'
import Lottie from 'react-lottie';

const Animation = ({ height, width, myAnimation }) => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: myAnimation,
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