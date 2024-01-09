import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    let date = new Date()
    let year = date.getFullYear()


    const handleLinkScrollClick = () => {
        // Sayfanın en üstüne git
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };



    return (

        <footer>
            <div className="footer-top section-pb section-pt-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="widget-footer mt-40">
                                <h6 className="title-widget">Contact Info</h6>
                                <div className="footer-addres">
                                    <div className="widget-content mb--20">
                                        <p>
                                            Address: 123 Main Street, Anytown, <br />
                                            CA 12345 - USA.
                                        </p>
                                        <p>
                                            Phone: <a href="tel:05555555555">0 (555) 555 55 55</a>
                                        </p>
                                        <p>
                                            Fax: <a href="tel:05555555555">0 (555) 555 55 55</a>
                                        </p>
                                        <p>
                                            Email: <a>ademkaragulle@example.com</a>
                                        </p>
                                    </div>
                                </div>
                                <ul className="social-icons">
                                    <li>
                                        <a
                                            className="facebook social-icon"
                                            href="https://www.facebook.com"
                                            title="Facebook"
                                            target="_blank"
                                        >
                                            <i className="fa fa-facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://twitter.com/login?lang=tr"
                                            className="twitter social-icon"
                                            title="Twitter"
                                            target="_blank"
                                        >
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.instagram.com/"
                                            className="instagram social-icon"
                                            title="Instagram"
                                            target="_blank"
                                        >
                                            <i className="fa fa-instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.linkedin.com"
                                            className="linkedin social-icon"
                                            title="Linkedin"
                                            target="_blank"
                                        >
                                            <i className="fa fa-linkedin" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="widget-footer mt-40">
                                <h6 className="title-widget">Information</h6>
                                <ul className="footer-list">
                                    <li>
                                        <Link onClick={() => handleLinkScrollClick()} to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => handleLinkScrollClick()} to="/shop">Shop</Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => handleLinkScrollClick()} to="/blog">Blog</Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => handleLinkScrollClick()} to="/about-us">About Us</Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => handleLinkScrollClick()} to="/contact-us">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="widget-footer mt-40">
                                <h6 className="title-widget">Get the app</h6>
                                <p>
                                    GreenLife App is now available on Google Play &amp; App Store. Get
                                    it now.
                                </p>
                                <ul className="footer-list">
                                    <li>
                                        <img src="assets/images/brand/img-googleplay.jpg" alt="" />
                                    </li>
                                    <li>
                                        <img src="assets/images/brand/img-appstore.jpg" alt="" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="copy-left-text">
                                <p>
                                    Copyright © <a href="https://ademkaragulle.netlify.app/" target='_blank'>Adem</a> {year && year}. All Right Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        //   footer End 

    )
}

export default Footer