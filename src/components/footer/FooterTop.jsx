import React from 'react'

function FooterTop() {
    return (
        <div className="newletter-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="newletter-wrap">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-12">
                                    <div className="newsletter-title mb-30">
                                        <h3>
                                            Join Our <br />
                                            <span>Newsletter Now</span>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-7">
                                    <div className="newsletter-footer mb-30">
                                        <input type="text" placeholder="Your email address..." />
                                        <div className="subscribe-button">
                                            <button className="subscribe-btn">Subscribe</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FooterTop