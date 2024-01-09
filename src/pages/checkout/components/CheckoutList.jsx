import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import uuid from 'react-uuid'
import { clearCart } from '../../../store/slices/cartSlice'

function CheckoutList() {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [address1, setAddress1] = useState("")
    const [address2, setAddress2] = useState("")
    const [town, setTown] = useState("")
    const [state, setState] = useState("")
    const [postCode, setPostCode] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const dispatch = useDispatch()

    const CheckoutSubmit = async () => {
        const date = new Date()
        if (currentUser) {
            const newBill = {
                "currentUser": currentUser.id,
                "id": uuid().slice(0, 13),
                "name": name,
                "surname": surname,
                "address1": address1,
                "address2": address2,
                "town": town,
                "state": state,
                "postCode": postCode,
                "phone": phone,
                "email": email,
                "orders": cart,
                "date": `${date.getDate()}.${date.getMonth() + 1}.${date.getUTCFullYear()}`
            }

            await axios.post('http://localhost:3000/orders', newBill)
                .catch(error => {
                    console.error('İstek hatası:', error);
                });
            setName("")
            setSurname("")
            setAddress1("")
            setAddress2("")
            setEmail("")
            setPhone("")
            setPostCode("")
            setState("")
            setTown("")
            dispatch(clearCart())


        }
        else {
            alert("Please Signin")
        }


    }

    const { cart, currentUser } = useSelector((store) => {
        return {
            cart: store.cart.items,
            currentUser: store.currentUser.currentUser,
        }
    })

    const totalAmount = () => {
        let total = 0
        cart.forEach(element => {
            total += element.newPrice * element.quantity
        });
        return total
    }


    return (
        <div className="main-content-wrap section-ptb checkout-page">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="coupon-area">
                            {/* coupon-accordion start */}
                            <div className="coupon-accordion">
                                {
                                    !currentUser &&
                                    <h3>
                                        Returning customer?{" "}
                                        <Link to={`/login-register`} className="coupon" id="showlogin">
                                            Click here to login
                                        </Link>
                                    </h3>
                                }
                            </div>
                            {/* coupon-accordion end */}

                        </div>
                    </div>
                </div>
                {/* checkout-details-wrapper start */}
                <div className="checkout-details-wrapper">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            {/* billing-details-wrap start */}
                            <div className="billing-details-wrap">
                                <div >
                                    <h3 className="shoping-checkboxt-title">Billing Details</h3>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <p className="single-form-row">
                                                <label>
                                                    First name <span className="required">*</span>
                                                </label>
                                                <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="First name" />
                                            </p>
                                        </div>
                                        <div className="col-lg-6">
                                            <p className="single-form-row">
                                                <label>
                                                    Surname <span className="required">*</span>
                                                </label>
                                                <input value={surname} onChange={(e) => setSurname(e.target.value)} type="text" name="Last name" />
                                            </p>
                                        </div>
                                        <div className="col-lg-12">
                                            <p className="single-form-row">
                                                <label>
                                                    Street address <span className="required">*</span>
                                                </label>
                                                <input
                                                    value={address1} onChange={(e) => setAddress1(e.target.value)}
                                                    type="text"
                                                    placeholder="House number and street name"
                                                    name="address"
                                                />
                                            </p>
                                        </div>
                                        <div className="col-lg-12">
                                            <p className="single-form-row">
                                                <input
                                                    value={address2} onChange={(e) => setAddress2(e.target.value)}
                                                    type="text"
                                                    placeholder="Apartment, suite, unit etc. (optional)"
                                                    name="address"
                                                />
                                            </p>
                                        </div>
                                        <div className="col-lg-12">
                                            <p className="single-form-row">
                                                <label>
                                                    Town / City <span className="required">*</span>
                                                </label>
                                                <input
                                                    value={town} onChange={(e) => setTown(e.target.value)}
                                                    type="text" name="address" />
                                            </p>
                                        </div>
                                        <div className="col-lg-12">
                                            <p className="single-form-row">
                                                <label>State / County</label>
                                                <input
                                                    value={state} onChange={(e) => setState(e.target.value)}
                                                    type="text" name="address" />
                                            </p>
                                        </div>
                                        <div className="col-lg-12">
                                            <p className="single-form-row">
                                                <label>
                                                    Postcode / ZIP <span className="required">*</span>
                                                </label>
                                                <input
                                                    value={postCode} onChange={(e) => setPostCode(e.target.value)}
                                                    type="text" name="address" />
                                            </p>
                                        </div>
                                        <div className="col-lg-12">
                                            <p className="single-form-row">
                                                <label>Phone</label>
                                                <input
                                                    value={phone} onChange={(e) => setPhone(e.target.value)}
                                                    type="text" name="address" />
                                            </p>
                                        </div>
                                        <div className="col-lg-12">
                                            <p className="single-form-row">
                                                <label>
                                                    Email address <span className="required">*</span>
                                                </label>
                                                <input
                                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                                    type="text" name="Email address " />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* billing-details-wrap end */}
                        </div>
                        <div className="col-lg-6 col-md-6">
                            {/* your-order-wrapper start */}
                            <div className="your-order-wrapper">
                                <h3 className="shoping-checkboxt-title">Your Order</h3>
                                {/* your-order-wrap start*/}
                                <div className="your-order-wrap">
                                    {/* your-order-table start */}
                                    <div className="your-order-table table-responsive">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="product-name">Product</th>
                                                    <th className="product-total">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    cart && cart.map((item, index) => (
                                                        <tr key={index} className="cart_item">
                                                            <td className="product-name">
                                                                {item.name}{" "}
                                                                <strong className="product-quantity"> × {item.quantity}</strong>
                                                            </td>
                                                            <td className="product-total">
                                                                <span className="amount">$ {item.newPrice}</span>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }

                                            </tbody>
                                            <tfoot>
                                                <tr className="cart-subtotal">
                                                    <th>Cart Subtotal</th>
                                                    <td>
                                                        <span className="amount">$ {totalAmount()}</span>
                                                    </td>
                                                </tr>
                                                <tr className="order-total">
                                                    <th>Order Total</th>
                                                    <td>
                                                        <strong>
                                                            <span className="amount">$ {totalAmount()}</span>
                                                        </strong>
                                                    </td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                    {/* your-order-table end */}
                                    {/* your-order-wrap end */}
                                    <div className="payment-method">
                                        <div className="payment-accordion">
                                            {/* ACCORDION START */}
                                            <h5>Direct Bank Transfer</h5>
                                            <div className="payment-content">
                                                <p>
                                                    Make your payment directly into our bank account. Please
                                                    use your Order ID as the payment reference. Your order
                                                    won’t be shipped until the funds have cleared in our
                                                    account.
                                                </p>
                                            </div>
                                            {/* ACCORDION END */}
                                            {/* ACCORDION START */}
                                            <h5>Cheque Payment</h5>
                                            <div className="payment-content">
                                                <p>
                                                    Please send your cheque to Store Name, Store Street, Store
                                                    Town, Store State / County, Store Postcode.
                                                </p>
                                            </div>
                                            {/* ACCORDION END */}
                                            {/* ACCORDION START */}
                                            <h5>PayPal</h5>
                                            <div className="payment-content">
                                                <p>
                                                    Pay via PayPal; you can pay with your credit card if you
                                                    don’t have a PayPal account.
                                                </p>
                                            </div>
                                            {/* ACCORDION END */}
                                        </div>
                                        <div className="order-button-payment">
                                            <input onClick={() => CheckoutSubmit()} type="submit" />
                                        </div>
                                    </div>
                                    {/* your-order-wrapper start */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* checkout-details-wrapper end */}
            </div>
        </div>
    )
}

export default CheckoutList