import React from 'react'
import { Link } from 'react-router-dom'

function Content() {

    const handleLinkScrollClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };



    return (
        <main className="about-us-page section-ptb">
            <div className="about-us_area section-pb">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-us_img">
                                <img
                                    src="assets/images/banner/about-us_bg.jpg"
                                    alt="About Us Image"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-us_content">
                                <h3 className="heading mb-20">About Ruiz</h3>
                                <p className="short-desc mb-20">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Molestias rem omnis fugiat dolores tenetur voluptatum explicabo
                                    illo vitae pariatur. Accusantium dolorum tempore, ullam assumenda
                                    nulla aliquid, voluptatibus veniam rem reprehenderit laboriosam
                                    itaque nihil velit doloremque vel! Natus, atque. Nesciunt modi
                                    tenetur, excepturi deserunt aperiam velit itaque. Modi, incidunt
                                    molestiae perspiciatis ratione error quidem pariatur laborum
                                    dignissimos nihil, quos cumque earum eveniet possimus dicta!
                                </p>
                                <div className="munoz-btn-ps_left slide-btn">
                                    <Link onClick={() => handleLinkScrollClick()} className="btn" to="/shop">
                                        Shop Now
                                    </Link >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonials-area bg-gray section-ptb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className=" testimonials-area">
                                <div className="row testimonial-two">
                                    <div className="col-lg-6 m-auto">
                                        <div className="testimonial-wrap-two text-center">
                                            <div className="quote-container">
                                                <div className="quote-image">
                                                    <img
                                                        src="assets/images/testimonial/testimonial-01.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="author">
                                                    <h6>Niloba Khan</h6>
                                                    <p>CEO of Hasbar</p>
                                                </div>
                                                <div className="testimonials-text">
                                                    <p>
                                                        Support and response has been amazing, helping me with
                                                        several issues I came across and got them solved almost
                                                        the same day. A pleasure to work with them!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 m-auto">
                                        <div className="testimonial-wrap-two text-center">
                                            <div className="quote-container">
                                                <div className="quote-image">
                                                    <img
                                                        src="assets/images/testimonial/testimonial-02.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="author">
                                                    <h6>Devite oni</h6>
                                                    <p>CEO of SunPark</p>
                                                </div>
                                                <div className="testimonials-text">
                                                    <p>
                                                        Support and response has been amazing, helping me with
                                                        several issues I came across and got them solved almost
                                                        the same day. A pleasure to work with them!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Content