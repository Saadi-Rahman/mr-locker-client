import React from 'react';
import RightSidebar from '../Shared/RightSidebar/RightSidebar';

const AddService = () => {
    return (
        <div className='pb-5'>
            <div className='bg-banner-comon'>
                <div className="mask-comon">
                    <div className="container d-flex justify-content-start align-items-center h-100">
                        <h1 className='text-warning fw-bold my-4 py-5'>Add Service</h1>
                    </div>
                </div>
            </div>

            <div className='container my-5 pt-3'>
                <div className='row'>
                    <div className='col-md-8'>
                        <div className='bg-banner2'>
                            <div className="container d-flex justify-content-center align-items-center h-100">
                                <h2 className='text-warning fw-bold'>Add a New Locksmith Service</h2>
                            </div>
                        </div>

                        <div className="container bg-light p-5">
                            <div className="row d-flex justify-content-center my-5">
                                <div className="col-lg-8">
                                    <div className="card shadow-sm w-100">
                                        <div className="card-body p-5">
                                            <form>
                                                <div className="mb-3 w-100">
                                                    <label className="form-label">Service Title</label>
                                                    <input type="text" className="form-control" placeholder='Enter Service Title' />
                                                </div>
                                                <div className="mb-3 w-100">
                                                    <label className="form-label">Service Image</label>
                                                    <input type="text" className="form-control" placeholder='Enter Service Image URL' />
                                                </div>
                                                <div className="mb-3 w-100">
                                                    <label className="form-label">Service Price</label>
                                                    <input type="text" className="form-control" placeholder='Enter Service Price' />
                                                </div>
                                                <div className="mb-3">
                                                <label className="form-label">Service Description</label>
                                                    <textarea className="form-control" rows="3" placeholder='Write a Description of your Service'></textarea>
                                                </div>
                                                <button type="submit" className="btn btn-warning fw-semibold w-100 py-2">Submit</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 mb-5'>
                        <RightSidebar></RightSidebar>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;