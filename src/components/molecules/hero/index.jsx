import React from 'react';
import Planet from "../planet/Planet";
import Grid from "../grid/Grid";
import './_hero.scss';


const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__container">
                <Grid/>
                <Planet/>
            </div>
        </div>
    );
};

export default Hero;
