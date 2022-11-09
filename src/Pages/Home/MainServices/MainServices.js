import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MainServices = () => {
    return (
        <section className='container my-5 pt-5'>
            <div className='text-center mb-5'>
                <h2 className="fs-1 fw-bold mb-3">Main Locksmith Services</h2>
                <p>We working only with licensed locksmith, all our locksmiths contractors pass background check and all approve with 
                <br /> locksmith Association of America, they must be licensed bonded and insured to work with us. Our customer service is our first <br /> priority and we want to make sure you have great experience with our service.</p>
            </div>
            <div>
                <div className="row mb-5">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card rounded shadow-lg border-0">
                            <div className="card-body p-4"><img src="https://i.postimg.cc/br2kqKMX/1.jpg" alt="" className="img-fluid d-block mx-auto mb-3 rounded" />
                            <h5>Automotive Locksmith</h5>
                            <h6>Price: $150</h6>
                            <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <div className="text-muted d-flex justify-content-between align-items-center mt-3 mb-2">
                                    <div>
                                        <FaStar className='text-warning fs-5 me-2 pb-1' /><span>5.0</span>
                                    </div>
                                    <div>
                                        <Link className='btn btn-warning text-decoration-none' to="">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card rounded shadow-lg border-0">
                            <div className="card-body p-4"><img src="https://i.postimg.cc/bYGBGdfP/2.jpg" alt="" className="img-fluid d-block mx-auto mb-3 rounded" />
                            <h5>Residential Locksmith</h5>
                            <h6>Price: $150</h6>
                            <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <div className="text-muted d-flex justify-content-between align-items-center mt-3 mb-2">
                                    <div>
                                        <FaStar className='text-warning fs-5 me-2 pb-1' /><span>5.0</span>
                                    </div>
                                    <div>
                                        <Link className='btn btn-warning text-decoration-none' to="">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card rounded shadow-lg border-0">
                            <div className="card-body p-4"><img src="https://i.postimg.cc/pyb8rsbm/3.jpg" alt="" className="img-fluid d-block mx-auto mb-3 rounded" />
                                <h5>Locks Change & Replacement</h5>
                                <h6>Price: $150</h6>
                                <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <div className="text-muted d-flex justify-content-between align-items-center mt-3 mb-2">
                                    <div>
                                        <FaStar className='text-warning fs-5 me-2 pb-1' /><span>5.0</span>
                                    </div>
                                    <div>
                                        <Link className='btn btn-warning text-decoration-none' to="">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card rounded shadow-lg border-0">
                            <div className="card-body p-4"><img src="https://i.postimg.cc/15w7HTzY/4.jpg" alt="" className="img-fluid d-block mx-auto mb-3 rounded" />
                            <h5>Commercial Locksmith</h5>
                            <h6>Price: $150</h6>
                            <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <div className="text-muted d-flex justify-content-between align-items-center mt-3 mb-2">
                                    <div>
                                        <FaStar className='text-warning fs-5 me-2 pb-1' /><span>5.0</span>
                                    </div>
                                    <div>
                                        <Link className='btn btn-warning text-decoration-none' to="">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card rounded shadow-lg border-0">
                            <div className="card-body p-4"><img src="https://i.postimg.cc/bvN6qw9K/5.jpg" alt="" className="img-fluid d-block mx-auto mb-3 rounded" />
                            <h5>Key duplication</h5>
                            <h6>Price: $150</h6>
                            <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <div className="text-muted d-flex justify-content-between align-items-center mt-3 mb-2">
                                    <div>
                                        <FaStar className='text-warning fs-5 me-2 pb-1' /><span>5.0</span>
                                    </div>
                                    <div>
                                        <Link className='btn btn-warning text-decoration-none' to="">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card rounded shadow-lg border-0">
                            <div className="card-body p-4"><img src="https://i.postimg.cc/MZhr1xzQ/6.jpg" alt="" className="img-fluid d-block mx-auto mb-3 rounded" />
                                <h5>Emergency Locksmith</h5>
                                <h6>Price: $150</h6>
                                <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <div className="text-muted d-flex justify-content-between align-items-center mt-3 mb-2">
                                    <div>
                                        <FaStar className='text-warning fs-5 me-2 pb-1' /><span>5.0</span>
                                    </div>
                                    <div>
                                        <Link className='btn btn-warning text-decoration-none' to="">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <Link to="/services" className="btn btn-warning px-4 py-2 fs-5 fw-semibold text-decoration-none">See All Services</Link>
                </div>
            </div>
        </section>
    );
};

export default MainServices;