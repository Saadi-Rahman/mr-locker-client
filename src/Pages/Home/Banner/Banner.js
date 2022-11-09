import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className='bg-image'>
            <div className="mask">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white">
                    <h1 className="display-3 fw-bold mb-3">Local Emergency Locksmith <br /> Services in Charlotte NC</h1>
                    <h5 className="text-warning mb-4">Fast, Affordable & Quality Locksmith 24/7</h5>
                    <Link className="btn btn-warning fs-5 fw-semibold px-md-4 py-md-3 m-2">Request a quote</Link>
                    <Link className="btn btn-outline-warning fs-5 fw-semibold px-md-4 py-md-3 m-2">Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;