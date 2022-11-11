import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className='pb-5'>
            <div className='bg-banner-comon'>
                <div className="mask-comon">
                    <div className="container d-flex justify-content-start align-items-center h-100">
                        <h1 className='text-warning fw-bold my-4 py-5'>Locksmith Services</h1>
                    </div>
                </div>
            </div>
            <div className='container my-5'>
                <div className='text-center mb-5'>
                    <h2 className="fs-1 fw-bold mb-3">Mr. Lockers' all Locksmith Services: {services.length}</h2>
                    <p>We working only with licensed locksmith, all our locksmiths contractors pass background check and all approve with 
                    <br /> locksmith Association of America, they must be licensed bonded and insured to work with us. Our customer service is our first <br /> priority and we want to make sure you have great experience with our service.</p>
                </div>

                <div className="row mb-5">
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Services;