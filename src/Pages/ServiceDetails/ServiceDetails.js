import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import RightSidebar from '../Shared/RightSidebar/RightSidebar';
// import CustomerReviews from './CustomerReviews';

const ServiceDetails = () => {
    const { _id, img, price, title, description, rating } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const rating = form.rating.value;
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: title,
            customer: name,
            email,
            rating,
            message
        }
        
        fetch('https://mr-locker-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('Review placed successfully');
                    form.reset();
                }
            })
            .catch(err => console.error(err));
    }

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

                        {/* Customer Reviews */}
                        <section className='bg-light pb-3'>
                            <div className="container pb-5 text-dark">
                                <h4 className='fw-bold text-dark ps-2 pt-3'>Customer Reviews</h4>
                                <hr className='m-0' />
                                <div className="row d-flex justify-content-center mt-4">
                                    <div className="col-md-11">
                                        <div className="d-flex flex-start my-4">
                                            <img className="rounded-circle shadow-1-strong me-3"
                                            src={user?.photoURL} alt="avatar" width="65" height="65" />
                                            <div className="card w-100">
                                                <div className="card-body p-4">
                                                    <div className="">
                                                    <h5>Add Your Review</h5>
                                                        <form onSubmit={handlePlaceReview}>
                                                            <div className='d-md-flex gap-3'>
                                                                <div className="mb-3 w-100">
                                                                    <input name='name' type="text" className="form-control" placeholder='Name' required />
                                                                </div>
                                                                <div className="mb-3 w-100">
                                                                    <input name='email' type="email" className="form-control" placeholder='Email' defaultValue={user?.email} readOnly />
                                                                </div>
                                                                <div className="mb-3 w-100">
                                                                    <input name='rating' type="text" className="form-control" placeholder='Rating out of 5' required />
                                                                </div>
                                                            </div>
                                                            <div className="mb-3">
                                                                <textarea name='message' className="form-control" rows="3" placeholder='Write your message' required></textarea>
                                                            </div>
                                                            {
                                                                user?.uid ?
                                                                <button type="submit" className="btn btn-warning btn-sm">Leave a review</button>
                                                                :
                                                                <Link to="/login" className='btn btn-warning btn-sm'>Leave a review</Link>
                                                            }
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-start">
                                            <img className="rounded-circle shadow-1-strong me-3" 
                                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp" alt="avatar" width="65" height="65" />
                                            <div className="card w-100">
                                                <div className="card-body p-4">
                                                    <div className="">
                                                        <h5>Mindy Campbell</h5>
                                                        <p className="small"><FaStar className='text-warning fs-5 me-2 mb-1' /><span>5.0</span> <span className='ms-3'>3 hours ago</span></p>
                                                        <p>Very quick and professional! The same day my smart lock was delivered I called these fine people to take the stress off. He was at my house in 30 mins and was done installing my lock in 20 mins! Wow!</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

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