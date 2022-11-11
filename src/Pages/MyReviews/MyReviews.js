import React from 'react';
import { FaStar } from 'react-icons/fa';
import RightSidebar from '../Shared/RightSidebar/RightSidebar';

const MyReviews = () => {
    return (
        <div className='pb-5'>
            <div className='bg-banner-comon'>
                <div className="mask-comon">
                    <div className="container d-flex justify-content-start align-items-center h-100">
                        <h1 className='text-warning fw-bold my-4 py-5'>My Reviews</h1>
                    </div>
                </div>
            </div>

            <div className='container my-5 pt-3'>
                <div className='row'>
                    <div className='col-md-8'>
                        <div className='bg-banner2'>
                            <div className="container d-flex justify-content-center align-items-center h-100">
                                <h2 className='text-warning fw-bold'>List of all My Reviews</h2>
                            </div>
                        </div>
                        <section className='bg-light pb-3'>
                            <div className="container pb-5 text-dark">
                                <h4 className='fw-bold text-dark ps-2 pt-3'>My Reviews</h4>
                                <hr className='m-0' />
                                <div className="row d-flex justify-content-center mt-4">
                                    <div className="col">
                                        <div className="d-flex mb-3">
                                            <div className="flex-shrink-0">
                                                <img className="rounded shadow-1-strong me-3" 
                                                src="https://i.postimg.cc/bvN6qw9K/5.jpg" alt="avatar" width="100" height="100" />
                                            </div>
                                            <div className="flex-grow-1 bg-white p-4 border shadow-sm">
                                                <h5>Key duplication</h5>
                                                <p className="small"><FaStar className='text-warning fs-5 me-2 mb-1' /><span>5.0</span> <span className='ms-3'>3 hours ago</span></p>
                                                <p>Very fast response time, super friendly and quick quality work for a great price! Within 30 minutes I had my car unlocked AND a new set of keys for my minivan. He totally saved the day. I can not recommend them enough!</p>
                                                <button type="submit" className="btn btn-outline-danger btn-sm me-2">Delete</button>
                                                <button type="submit" className="btn btn-warning btn-sm px-3">Edit</button>
                                            </div>
                                        </div>

                                        <div className="d-flex mb-3">
                                            <div className="flex-shrink-0">
                                                <img className="rounded shadow-1-strong me-3" 
                                                src="https://i.postimg.cc/15w7HTzY/4.jpg" alt="avatar" width="100" height="100" />
                                            </div>
                                            <div className="flex-grow-1 bg-white p-4 border shadow-sm">
                                                <h5>Commercial Locksmith</h5>
                                                <p className="small"><FaStar className='text-warning fs-5 me-2 mb-1' /><span>5.0</span> <span className='ms-3'>3 hours ago</span></p>
                                                <p>Extremely responsive. Arrived within an hour of calling. Called me "sir," and then stopped when I asked him not to. Opened the lock at a reasonable price. You can't go wrong!</p>
                                                <button type="submit" className="btn btn-outline-danger btn-sm me-2">Delete</button>
                                                <button type="submit" className="btn btn-warning btn-sm px-3">Edit</button>
                                            </div>
                                        </div>
                                        
                                        <div className="d-flex mb-3">
                                            <div className="flex-shrink-0">
                                                <img className="rounded shadow-1-strong me-3" 
                                                src="https://i.postimg.cc/br2kqKMX/1.jpg" alt="avatar" width="100" height="100" />
                                            </div>
                                            <div className="flex-grow-1 bg-white p-4 border shadow-sm">
                                                <h5>Automotive Locksmith</h5>
                                                <p className="small"><FaStar className='text-warning fs-5 me-2 mb-1' /><span>5.0</span> <span className='ms-3'>3 hours ago</span></p>
                                                <p>This is the most wonderful locksmith and a headache-free experience! Hands down thanks you so very much for repairing my problem and upgrading my car. Very efficient, direct, no nonsense. Appreciate you!</p>
                                                <button type="submit" className="btn btn-outline-danger btn-sm me-2">Delete</button>
                                                <button type="submit" className="btn btn-warning btn-sm px-3">Edit</button>
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

export default MyReviews;