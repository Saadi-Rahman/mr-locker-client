import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import RightSidebar from '../Shared/RightSidebar/RightSidebar';
import MyReviewsRow from './MyReviewsRow';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() =>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Sure to delete this review?');
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('Deleted Successfully!');
                    const remaining = reviews.filter(rev => rev._id !== id);
                    setReviews(remaining);
                }
            });
        }
    }

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
                                <h4 className='fw-bold text-dark ps-2 pt-3'>My Reviews: {reviews.length}</h4>
                                <hr className='m-0' />
                                <div className="row d-flex justify-content-center mt-4">
                                    <div className="col">
                                        {
                                            reviews.map(review => <MyReviewsRow
                                                key={review._id}
                                                review={review}
                                                handleDelete={handleDelete}
                                            ></MyReviewsRow>)
                                        }    
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