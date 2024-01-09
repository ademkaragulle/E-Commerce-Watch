import React from 'react'
import { Link } from 'react-router-dom'



function BreadcrumbArea({ CurrentPage }) {

    const handleLinkScrollClick = () => {
        // Sayfanın en üstüne git
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="breadcrumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* breadcrumb-list start */}
                        <ul className="breadcrumb-list">
                            <li className="breadcrumb-item">
                                <Link onClick={() => handleLinkScrollClick()} to={"/"} >Home</Link>
                            </li>
                            <li className="breadcrumb-item active">{CurrentPage}</li>
                        </ul>
                        {/* breadcrumb-list end */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreadcrumbArea