import React from 'react';
import '../../atoms/Circles/_circles.scss';
import Hero from "../../molecules/hero";
import Header from "../../atoms/Header";
import Footer from "../../molecules/footer";
import Circles from "../../atoms/Circles";
const Home = () => {
    return (
        <div className="home">
            <Header />
            <Hero />
            <Footer />
            <Circles/>
        </div>
    );
};

export default Home;
