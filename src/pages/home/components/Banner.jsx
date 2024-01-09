import React from 'react'

function Banner() {
    return (
        <div className="banner-area section-pt">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="single-banner mb-30">
                            <a href="#">
                                <img src="assets/images/banner/banner-01.jpg" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="single-banner mb-30">
                            <a href="#">
                                <img src="assets/images/banner/banner-02.jpg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Banner