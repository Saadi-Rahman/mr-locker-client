import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaPinterest, FaFacebookSquare, FaYelp, FaPhoneAlt, FaPrint, FaEnvelope, FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="container-fluid px-0">
            <footer className="text-center text-lg-start text-white bg-dark">
                <div className="container pt-5 px-md-0">
                    <section className="">
                        <div className="row">
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="fs-3 fw-bold mb-3 font-weight-bold">Mr. Locker</h6>
                                <p>Mr. Locker Locksmith is not just highly trained, I have over 10 years of experience in the field and all the right tools to perform professional work.</p>
                            </div>

                            <hr className="w-100 clearfix d-md-none" />

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Services</h6>
                                <p><Link className="text-white text-decoration-none">Residential</Link></p>
                                <p><Link className="text-white text-decoration-none">Automobile</Link></p>
                                <p><Link className="text-white text-decoration-none">Emergency</Link></p>
                                <p><Link className="text-white text-decoration-none">Commercial</Link></p>
                            </div>

                            <hr className="w-100 clearfix d-md-none" />

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                                <p><Link className="text-white text-decoration-none">Your Account</Link></p>
                                <p><Link className="text-white text-decoration-none">Become an Affiliate</Link></p>
                                <p><Link className="text-white text-decoration-none">Shipping Rates</Link></p>
                                <p><Link className="text-white text-decoration-none">Help</Link></p>
                            </div>
                            
                            <hr className="w-100 clearfix d-md-none" />

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p><FaHome className='me-2' /> New York, NY 10012, US</p>
                                <p><FaEnvelope className='me-2' /> mr.locker@yahoo.com</p>
                                <p><FaPhoneAlt className='me-2' /> + 01 234 567 88</p>
                                <p><FaPrint className='me-2' /> + 01 234 567 89</p>
                            </div>
                        </div>
                    </section>

                    <hr className="my-3" />

                    <section className="p-3 pt-0">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-7 col-lg-8 text-center text-md-start">
                                <div className="p-3">
                                    © 2022. All rights reserved by Mr. Locker
                                </div>
                            </div>

                            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                                <Link className='text-warning fs-5 text-decoration-none me-3'><FaFacebookSquare /></Link>
                                <Link className='text-warning fs-5 text-decoration-none me-3'><FaPinterest /></Link>
                                <Link className='text-warning fs-5 text-decoration-none me-3'><FaTwitter /></Link>
                                <Link className='text-warning fs-5 text-decoration-none me-3'><FaYelp /></Link>
                                <Link className='text-warning fs-5 text-decoration-none me-3'><FaInstagram /></Link>
                                <Link className='text-warning fs-5 text-decoration-none'><FaLinkedin /></Link>
                            </div>
                        </div>
                    </section>
                </div>
            </footer>
        </div>
    );
};

export default Footer;