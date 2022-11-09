import React from 'react';
import { FaLaptop, FaPhoneAlt, FaRegBell, FaRegThumbsUp } from 'react-icons/fa';

const WhyChoose = () => {
    return (
        <div className='text-center my-5 pt-5'>
            <div className='bg-why-choose'>
                <div className="mask-why-choose">
                    <div className="container d-flex justify-content-center align-items-center h-100">
                        <div className="row my-5">
                            <h1 className="text-warning fw-bold mb-3">Why Choose Mr. Locker Locksmith</h1>
                            <div className="col-lg-3 col-md-6 mb-2 mb-lg-0">
                                <div className="card rounded bg-transparent border-0">
                                    <div className="card-body p-4">
                                        <FaPhoneAlt className='text-warning display-4 mb-3' />
                                        <h5 className='text-warning'>24 Hour Service</h5>
                                        <p className="text-white">Whenever you call us, we always answer. We are ready to help 24/7 and always keep the understanding attitude towards our clients.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-2 mb-lg-0">
                                <div className="card rounded bg-transparent border-0">
                                    <div className="card-body p-4">
                                        <FaRegBell className='text-warning display-4 mb-3' />
                                        <h5 className='text-warning'>30 Minutes Response Time</h5>
                                        <p className="text-white">Whether it's burglary or lockset problems, it's always stress and inconvenience. Luckily, we are here to rid of problems and install lockets, doors or security systems.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-2 mb-lg-0">
                                <div className="card rounded bg-transparent border-0">
                                    <div className="card-body p-4">
                                        <FaLaptop className='text-warning display-4 mb-3' />
                                        <h5 className='text-warning'>10% Discount For Website Call Out</h5>
                                        <p className="text-white">Visited our website? Don't hurry to call via phone right away, we have an offer for you. Use our online call possibility to get a 10% discount.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-2 mb-lg-0">
                                <div className="card rounded bg-transparent border-0">
                                    <div className="card-body p-4">
                                        <FaRegThumbsUp className='text-warning display-4 mb-3' />
                                        <h5 className='text-warning'>Fully Qualified Locksmith</h5>
                                        <p className="text-white">Each of our locksmiths has to pass a careful selection process. We check the prior experience, skills and references before scheduling the final interview.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;