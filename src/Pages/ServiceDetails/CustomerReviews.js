import React from 'react';
import { Card } from 'react-bootstrap';

const CustomerReviews = () => {
    return (
        <div>
            <Card border="light">
                <Card.Header className='fs-5 fw-bold'>Customer Reviews</Card.Header>
            </Card>
            <section className='bg-light'>
                <div className="container py-5 text-dark">
                    <div className="row d-flex justify-content-center">
                    <div className="col-md-11">
                        <div className="d-flex flex-start mb-4">
                        <img className="rounded-circle shadow-1-strong me-3"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar" width="65"
                            height="65" />
                        <div className="card w-100">
                            <div className="card-body p-4">
                            <div className="">
                                <h5>Johny Cash</h5>
                                <p className="small">3 hours ago</p>
                                <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                                viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                Donec lacinia congue felis in faucibus ras purus odio, vestibulum in
                                vulputate at, tempus viverra turpis.
                                </p>

                                <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <a href="#!" className="link-muted me-2"><i className="fas fa-thumbs-up me-1"></i>132</a>
                                    <a href="#!" className="link-muted"><i className="fas fa-thumbs-down me-1"></i>15</a>
                                </div>
                                <a href="#!" className="link-muted"><i className="fas fa-reply me-1"></i> Reply</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="d-flex flex-start">
                        <img className="rounded-circle shadow-1-strong me-3"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp" alt="avatar" width="65"
                            height="65" />
                        <div className="card w-100">
                            <div className="card-body p-4">
                            <div className="">
                                <h5>Mindy Campbell</h5>
                                <p className="small">5 hours ago</p>
                                <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
                                cumque doloribus dolorum dolor repellat nemo animi at iure autem fuga
                                cupiditate architecto ut quam provident neque, inventore nisi eos quas?
                                </p>

                                <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <a href="#!" className="link-muted me-2"><i className="fas fa-thumbs-up me-1"></i>158</a>
                                    <a href="#!" className="link-muted"><i className="fas fa-thumbs-down me-1"></i>13</a>
                                </div>
                                <a href="#!" className="link-muted"><i className="fas fa-reply me-1"></i> Reply</a>
                                </div>
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