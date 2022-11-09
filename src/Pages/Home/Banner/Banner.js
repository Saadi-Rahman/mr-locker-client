import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className='bg-image'>
            <div class="mask">
                <div class="d-flex justify-content-center align-items-center h-100">
                    <div class="text-white">
                    <h1 class="display-3 fw-bold mb-3">Local Emergency Locksmith <br /> Services in Charlotte NC</h1>
                    <h5 class="mb-4">FAST, AFFORDABLE & QUALITY LOCKSMITHS 24/7</h5>
                    <Link class="btn btn-warning fs-5 fw-semibold px-md-4 py-md-3 m-2">Request a quote</Link>
                    <Link class="btn btn-outline-warning fs-5 fw-semibold px-md-4 py-md-3 m-2">Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;