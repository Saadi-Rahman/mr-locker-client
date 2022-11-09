import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../assets/door-lock.jpg';
import './Welcome.css';

const Welcome = () => {
    return (
        <div className='container my-5 pt-5'>
                <div className="row g-0">
                    <div className="col-lg-6">
                        <div className='pt-5'>
                            <img src={image} className="image-fluid w-100" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 p-5 d-flex flex-column justify-content-center">
                        <h2 className="display-5 fw-bold mb-3">Welcome to <br /> Mr. Locker Locksmith!</h2>
                        <p>Mr. Locker Locksmith network its your solution when you in emergency and need 24 hour locksmith service asap. Our network made to help potential customers to find high rated and trusted locksmith. We providing service around the clock nationwide, It’s no matter what time in the day or in the night our locksmiths can help you no time!<br /> <br />
                        Will connect you with the high level local locksmith company in your neighborhood with the best, experience, price and friendly service!</p>
                        <div className="my-4">
                            <Link to="/about" className="btn btn-warning px-4 py-2 fs-5 fw-semibold text-decoration-none">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Welcome;