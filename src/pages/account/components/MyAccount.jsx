import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Logout } from '../../../store/slices/userSlice'
import axios from 'axios'

function MyAccount() {
    const [orders, setOrders] = useState([])
    const dispatch = useDispatch()
    const { currentUser } = useSelector((store) => {
        return {
            currentUser: store.currentUser.currentUser,
        }
    })


    const fetchOrder = async () => {
        let res = await axios.get("http://localhost:3000/orders");
        let response = res.data.filter(x => x.currentUser == currentUser.id);
        console.log(response.orders)
        console.log(response)

        setOrders(response)
    }

    useEffect(() => {
        fetchOrder()
    }, [currentUser])


    const totalPrice = (items) => {
        let total = 0
        items.forEach(item => {
            total += item.newPrice * item.quantity
        });
        return total
    }


    return (
        <div className="main-content-wrap section-ptb my-account-page">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="account-dashboard">
                            <div className="dashboard-upper-info">
                                <div className="row align-items-center no-gutters">
                                    <div className="col-lg-3 col-md-12">
                                        <div className="d-single-info">
                                            <p className="user-name">
                                                Hello <span>{currentUser && currentUser.userName}</span>
                                            </p>

                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="d-single-info">
                                            <p>Need Assistance? Customer service at.</p>
                                            <p>admin@devitems.com.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-12">
                                        <div className="d-single-info">
                                            <p>E-mail them at </p>
                                            <p>support@yoursite.com</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-12">
                                        <div className="d-single-info text-lg-center">
                                            <Link to="/cart" className="view-cart">
                                                <i className="fa fa-cart-plus" /> {" "}
                                                view cart
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-lg-2">
                                    {/* Nav tabs */}
                                    <ul role="tablist" className="nav flex-column dashboard-list">
                                        <li>
                                            <a
                                                href="#dashboard"
                                                data-bs-toggle="tab"
                                                className="nav-link active"
                                            >
                                                Dashboard
                                            </a>
                                        </li>
                                        <li>
                                            {" "}
                                            <a href="#orders" data-bs-toggle="tab" className="nav-link">
                                                Orders
                                            </a>
                                        </li>

                                        <li>
                                            <Link onClick={() => dispatch(Logout())} to="/login-register" className="nav-link">
                                                logout
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-12 col-lg-10">
                                    {/* Tab panes */}
                                    <div className="tab-content dashboard-content">
                                        <div className="tab-pane active" id="dashboard">
                                            <h3>Dashboard </h3>
                                            <p>
                                                From your account dashboard. you can easily check &amp; view
                                                your <a href="#">recent orders</a>, manage your{" "}
                                                <a href="#">shipping and billing addresses</a> and{" "}
                                                <a href="#">edit your password and account details.</a>
                                            </p>
                                        </div>
                                        <div className="tab-pane fade" id="orders">
                                            <h3>Orders</h3>
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th>Order Id</th>
                                                            <th>Date</th>
                                                            <th>Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        {
                                                            orders && orders.map((item, index) => (
                                                                <tr>
                                                                    <td>{item.id}</td>
                                                                    <td>{item.date}</td>
                                                                    <td>$ {totalPrice(item.orders)}</td>
                                                                </tr>
                                                            ))
                                                        }

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div className="tab-pane fade" id="account-details">
                                            <h3>Account details </h3>
                                            <div className="login">
                                                <div className="login-form-container">
                                                    <div className="account-login-form">
                                                        <form action="#">
                                                            <p>
                                                                Already have an account?{" "}
                                                                <a href="#">Log in instead!</a>
                                                            </p>
                                                            <label>Social title</label>
                                                            <div className="input-radio">
                                                                <span className="custom-radio">
                                                                    <input
                                                                        type="radio"
                                                                        defaultValue={1}
                                                                        name="id_gender"
                                                                    />{" "}
                                                                    Mr.
                                                                </span>
                                                                <span className="custom-radio">
                                                                    <input
                                                                        type="radio"
                                                                        defaultValue={1}
                                                                        name="id_gender"
                                                                    />{" "}
                                                                    Mrs.
                                                                </span>
                                                            </div>
                                                            <div className="account-input-box">
                                                                <label>First Name</label>
                                                                <input type="text" name="first-name" />
                                                                <label>Last Name</label>
                                                                <input type="text" name="last-name" />
                                                                <label>Email</label>
                                                                <input type="text" name="email-name" />
                                                                <label>Password</label>
                                                                <input type="password" name="user-password" />
                                                                <label>Birthdate</label>
                                                                <input
                                                                    type="text"
                                                                    placeholder="MM/DD/YYYY"
                                                                    defaultValue=""
                                                                    name="birthday"
                                                                />
                                                            </div>
                                                            <div className="example">(E.g.: 05/31/1970)</div>
                                                            <div className="custom-checkbox">
                                                                <input
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                    name="optin"
                                                                />
                                                                <label>Receive offers from our partners</label>
                                                            </div>
                                                            <div className="custom-checkbox">
                                                                <input
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                    name="newsletter"
                                                                />
                                                                <label>
                                                                    Sign up for our newsletter
                                                                    <br />
                                                                    <em>
                                                                        You may unsubscribe at any moment. For that
                                                                        purpose, please find our contact info in the
                                                                        legal notice.
                                                                    </em>
                                                                </label>
                                                            </div>
                                                            <div className="button-box">
                                                                <button className="btn default-btn" type="submit">
                                                                    Save
                                                                </button>
                                                            </div>
                                                        </form>
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
            </div>
        </div>

    )
}

export default MyAccount