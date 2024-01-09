import React from 'react'
import BreadcrumbArea from '../../components/breadcrumb/BreadcrumbArea'
import Login from './components/Login'
import Register from './components/Register'

function LoginRegister() {
    return (
        <>
            <BreadcrumbArea CurrentPage={"Login & Register"} />
            <div className="main-content-wrap section-ptb lagin-and-register-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 m-auto">
                            <div className="login-register-wrapper">
                                {/* login-register-tab-list start */}
                                <div className="login-register-tab-list nav">
                                    <a className="active" data-bs-toggle="tab" href="#lg1">
                                        <h4> login </h4>
                                    </a>
                                    <a data-bs-toggle="tab" href="#lg2">
                                        <h4> register </h4>
                                    </a>
                                </div>
                                {/* login-register-tab-list end */}
                                <div className="tab-content">
                                    <Login />
                                    <Register />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default LoginRegister