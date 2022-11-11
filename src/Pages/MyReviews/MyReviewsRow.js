import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const MyReviewsRow = ({review, handleDelete}) => {
    const {_id, serviceName, rating, message, service} = review;
    const [reviewService, setReviewService] = useState({});

    useEffect( () => {
        fetch(`https://mr-locker-server.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data));
    }, [service])

    return (
        <div className="d-flex mb-3">
            <div className="flex-shrink-0">
                {
                    reviewService?.img && 
                    <img className="rounded shadow-1-strong me-3" src={reviewService.img} alt="avatar" width="100" height="100" />
                }
            </div>
            <div className="flex-grow-1 bg-white p-4 border shadow-sm">
                <h5>{serviceName}</h5>
                <p className="small"><FaStar className='text-warning fs-5 me-2 mb-1' /><span>{rating}</span> <span className='ms-3'>3 hours ago</span></p>
                <p>{message}</p>
                <button onClick={() => handleDelete(_id)} type="submit" className="btn btn-outline-danger btn-sm me-2">Delete</button>
                <button type="submit" className="btn btn-warning btn-sm px-3">Edit</button>
            </div>
        </div>
    );
};

export default MyReviewsRow;