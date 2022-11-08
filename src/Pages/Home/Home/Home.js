import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import MainServices from '../MainServices/MainServices';
import Welcome from '../Welcome/Welcome';
import WhyMrLocker from '../WhyMrLocker/WhyMrLocker';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <MainServices></MainServices>
            <WhyMrLocker></WhyMrLocker>
            <About></About>
        </div>
    );
};

export default Home;