import React from 'react';

const Gallery = () => {
    return (
        <div class="container my-5 py-5">
            <div class="jumbotron">
                <h2 className="fs-1 fw-bold mb-3">Photo Gallery</h2>
                <p>Mr. Locker Locksmith is one of the leading locksmith and security services in the Charlotte, NC area. <br /> Here are some projects and photos of Mr. Locker Locksmiths' service.</p>
            </div>
            
            <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
                <img src="https://i.postimg.cc/bwRCXtkx/g2.jpg" alt="" class="fluid bg-warning img-thumbnail shadow-lg rounded-4" />      
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
                <img src="https://i.postimg.cc/nLR3rfdM/g3.jpg" alt="" class="fluid bg-warning img-thumbnail shadow-lg rounded-4" />      
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
                <img src="https://i.postimg.cc/PJZySpd8/g5.jpg" alt="" class="fluid bg-warning img-thumbnail shadow-lg rounded-4" />      
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
                <img src="https://i.postimg.cc/9XqLmSyF/g6.jpg" alt="" class="fluid bg-warning img-thumbnail shadow-lg rounded-4" />      
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
                <img src="https://i.postimg.cc/nLP1ZYzD/g11.png" alt="" class="fluid bg-warning img-thumbnail shadow-lg rounded-4" />      
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
                <img src="https://i.postimg.cc/J4NKJkTf/g8.jpg" alt="" class="fluid bg-warning img-thumbnail shadow-lg rounded-4" />      
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
                <img src="https://i.postimg.cc/6Q3hD19K/g9.png" alt="" class="fluid bg-warning img-thumbnail shadow-lg rounded-4" />      
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
                <img src="https://i.postimg.cc/MKwZtCDn/g14.jpg" alt="" class="fluid bg-warning img-thumbnail shadow-lg rounded-4" />      
                </div>
            </div>
        </div>
    );
};

export default Gallery;