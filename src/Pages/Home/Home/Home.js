import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import MainServices from '../MainServices/MainServices';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <MainServices></MainServices>
            <WhyChoose></WhyChoose>
            <About></About>
        </div>
    );
};

export default Home;