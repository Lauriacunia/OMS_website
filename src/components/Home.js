import React, { useEffect } from "react";
import Hero from './Hero';
import Info from "./Info";


const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div>
            <Hero />
            <Info />
        </div>
    )
}
export default Home
