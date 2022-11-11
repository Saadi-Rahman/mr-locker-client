import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import RightSidebar from '../Shared/RightSidebar/RightSidebar';
import CustomerReviews from './CustomerReviews';

const ServiceDetails = () => {
    const { img, price, title, description, rating } = useLoaderData();
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
                    <div className='col-md-8'>
                        <div className='mb-5'>
                            <div className='bg-secondary'>
                                <img src={img} alt="" className="img-fluid d-block mx-auto" />
                            </div>
                            <h2 className='fw-bold py-3'>{title}</h2>
                            <p>{description}</p>
                            <div className='d-flex align-items-center mt-4 gap-5'>
                                <div>
                                    <h4 className='fw-semibold mb-2'>Price: ${price}</h4>
                                </div>
                                <div>
                                    <FaStar className='text-warning fs-4 mb-2 me-3' /><span className='fs-5'>{rating}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <CustomerReviews></CustomerReviews>
                        </div>
                    </div>
                    <div className='col-md-4 mb-5'>
                        <RightSidebar></RightSidebar>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;