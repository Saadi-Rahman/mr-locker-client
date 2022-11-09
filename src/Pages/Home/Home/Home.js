import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import MainServices from '../MainServices/MainServices';
import WhyChoose from '../WhyChoose/WhyChoose';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <MainServices></MainServices>
            <WhyChoose></WhyChoose>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;