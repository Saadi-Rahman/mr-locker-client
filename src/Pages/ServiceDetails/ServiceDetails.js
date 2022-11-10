import React from 'react';
import RightSidebar from '../Shared/RightSidebar/RightSidebar';
import CustomerReviews from './CustomerReviews';

const ServiceDetails = () => {
    return (
        <div className='pb-5'>
            <div className='bg-banner-comon'>
                <div className="mask-comon">
                    <div className="container d-flex justify-content-start align-items-center h-100">
                        <h1 className='text-warning fw-bold my-4 py-5'>Service Details</h1>
                    </div>
                </div>
            </div>

            <div className='container my-5 pt-3'>
                <div className='row'>
                    <div className='col-md-9 border'>
                        <div className='mb-5'>
                            <div className='bg-secondary'>
                                <img src="https://i.postimg.cc/br2kqKMX/1.jpg" alt="" className="img-fluid d-block mx-auto" />
                            </div>
                            <h2 className='fw-bold py-3'>Automotive Locksmith</h2>
                            <p>Did you think that only your car dealership can replace or fix your car keys? Simply not true. Your local locksmith here at Best Buy Locksmith can help you handle anything related to your car and its locks. The best part? We’re always going to be cheaper than going to your dealership or authorized service center, and we’re experts in the field. <br /> <br />
                            We also understand that you want to get back on the road as fast as possible. If that is the case or it’s an emergency – please do not hesitate but to call us directly. That will always be the fastest way to reach us and to allow us to service you. <br /> <br />
                            Here are the six major categories we offer for our auto lock services. We like to be upfront and transparent so we will always do our best to give you accurate pricing over the phone, based on the information that you have provided to us. If you are interested in finding out our price estimations, please do not hesitate at all and head over to our prices page here. You can also always use our contact form and call us and we can let you know then as well.</p>
                        </div>
                        <div>
                            <CustomerReviews></CustomerReviews>
                        </div>
                    </div>
                    <div className='col-md-3 mb-5 border'>
                        <RightSidebar></RightSidebar>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;