import React from 'react'
import '../Home.css'
import { Link } from 'react-router-dom'
function Slider() {
    return (

        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div style={{ position: "absolute", zIndex: 20, top: "50%", left: "50%", width: "70%", transform: "translate(-50%, -50%)", color: "white" }}>
                        <h5 style={{ color: "white" }}>Exclusive Offer -20% Off This Week</h5>
                        <h1 style={{ color: "white" }}>H-Vault Classico</h1>
                        <p style={{ maxWidth: "560px" }}>H-Vault Watches Are A Lot Like Classic American Muscle Cars - Expect For The American Part That Is. </p>
                        <p>Starting At &nbsp;
                            <strong>$1.499.00</strong>
                        </p>
                        <div className="slide-btn-group mt-4">
                            <Link to="shop" className="btn btn-bordered btn-style-1 btn-shop-now ">Shop Now</Link>
                        </div>
                    </div>
                    <img style={{ height: "700px" }} src="assets/images/slider/slide-bg-2.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <div style={{ position: "absolute", zIndex: 20, top: "50%", left: "50%", width: "70%", transform: "translate(-50%, -50%)", color: "white" }}>
                        <h5 style={{ color: "white" }}>Exclusive Offer -20% Off This Week</h5>
                        <h1 style={{ color: "white" }}>H-Vault Classico</h1>
                        <p style={{ maxWidth: "560px" }}>H-Vault Watches Are A Lot Like Classic American Muscle Cars - Expect For The American Part That Is. </p>
                        <p>Starting At &nbsp;
                            <strong>$1.499.00</strong>
                        </p>
                        <div className="slide-btn-group mt-4">
                            <Link to="shop" className="btn btn-bordered btn-style-1 btn-shop-now ">Shop Now</Link>
                        </div>
                    </div>
                    <img style={{ height: "700px" }} src="assets/images/slider/slide-bg-1.jpg" className="d-block w-100" alt="..." />
                </div>

            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}


export default Slider