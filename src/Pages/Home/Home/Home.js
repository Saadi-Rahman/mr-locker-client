import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import MainServices from '../MainServices/MainServices';
import WhyMrLocker from '../WhyMrLocker/WhyMrLocker';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <MainServices></MainServices>
            <WhyMrLocker></WhyMrLocker>
        </div>
    );
};

export default Home;