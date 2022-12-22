import React from 'react';

const Gallery = () => {
    return (
        <div className="container my-5 py-5">
            <div className="">
                <h2 className="fs-1 fw-bold mb-3">Photo Gallery</h2>
                <p>Mr. Locker Locksmith is one of the leading locksmith and security services in the Charlotte, NC area. <br /> Here are some projects and photos of Mr. Locker Locksmiths' service.</p>
            </div>
            
            <div className="row g-0">
                <div className="col-sm-6 col-md-4 col-lg-3">
                <img src="https://i.postimg.cc/bwRCXtkx/g2.jpg" alt="" className="w-100" />
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                <img src="https://i.postimg.cc/nLR3rfdM/g3.jpg" alt="" className="w-100" />
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                <img src="https://i.postimg.cc/PJZySpd8/g5.jpg" alt="" className="w-100" />
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                <img src="https://i.postimg.cc/9XqLmSyF/g6.jpg" alt="" className="w-100" />
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                <img src="https://i.postimg.cc/nLP1ZYzD/g11.png" alt="" className="w-100" />
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                <img src="https://i.postimg.cc/J4NKJkTf/g8.jpg" alt="" className="w-100" />
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                <img src="https://i.postimg.cc/6Q3hD19K/g9.png" alt="" className="w-100" />
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                <img src="https://i.postimg.cc/MKwZtCDn/g14.jpg" alt="" className="w-100" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;