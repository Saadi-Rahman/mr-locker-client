import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../Services/ServiceCard';

const MainServices = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('https://mr-locker-server.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <section className='container my-5 pt-5'>
            <div className='text-center mb-5'>
                <h2 className="fs-1 fw-bold mb-3">Main Locksmith Services</h2>
                <p>We working only with licensed locksmith, all our locksmiths contractors pass background check and all approve with 
                <br /> locksmith Association of America, they must be licensed bonded and insured to work with us. Our customer service is our first <br /> priority and we want to make sure you have great experience with our service.</p>
            </div>
            <div className='pb-2'>
                <div className="row mb-4">
                   {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
                <div className='d-flex justify-content-center'>
                    <Link to="/services" className="btn btn-warning px-4 py-2 fs-5 fw-semibold text-decoration-none shadow">See All Services</Link>
                </div>
            </div>
        </section>
    );
};

export default MainServices;