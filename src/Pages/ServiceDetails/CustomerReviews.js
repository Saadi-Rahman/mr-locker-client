import React from 'react';
import { FaStar } from 'react-icons/fa';

const CustomerReviews = () => {
    return (
        <div>
            <section className='bg-light pb-3'>
                <div className="container pb-5 text-dark">
                    <h4 className='fw-bold text-dark ps-2 pt-3'>Customer Reviews</h4>
                    <hr className='m-0' />
                    <div className="row d-flex justify-content-center mt-4">
                        <div className="col-md-11">
                            <div className="d-flex flex-start my-4">
                                <img className="rounded-circle shadow-1-strong me-3"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar" width="65" height="65" />
                                <div className="card w-100">
                                    <div className="card-body p-4">
                                        <div className="">
                                        <h5>Add Your Review</h5>
                                            <form>
                                                <div className='d-md-flex gap-3'>
                                                    <div className="mb-3 w-100">
                                                        <input type="text" className="form-control" placeholder='Name' />
                                                    </div>
                                                    <div className="mb-3 w-100">
                                                        <input type="text" className="form-control" placeholder='Add a Ratting between 1-5' />
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <textarea className="form-control" rows="3" placeholder='Write your message'></textarea>
                                                </div>
                                                <button type="submit" className="btn btn-warning btn-sm">Submit</button>
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
    );
};

export default CustomerReviews;