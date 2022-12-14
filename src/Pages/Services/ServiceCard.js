import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const { _id, img, price, title, description, rating } = service;

    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card rounded shadow-lg border-0">
                <div className="card-body p-4"><img src={img} alt="" className="img-fluid d-block mx-auto mb-3 rounded" />
                    <h5>{title}</h5>
                    <h6>Price: ${price}</h6>
                    <p className="small text-muted font-italic">{description.slice(0, 100) + '...'}</p>
                    <div className="text-muted d-flex justify-content-between align-items-center mt-3 mb-2">
                        <div>
                            <FaStar className='text-warning fs-5 me-2 pb-1' /><span>{rating}</span>
                        </div>
                        <div>
                            <Link className='btn btn-warning text-decoration-none' to={`/serviceDetails/${_id}`}>View Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;