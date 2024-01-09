import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../../../store/slices/cartSlice';
function CartList() {
    const dispatch = useDispatch()
    const { cart } = useSelector((store) => {
        return {
            cart: store.cart.items,
        }
    })

    const handleLinkScrollClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    const totalAmount = () => {
        let total = 0
        cart.forEach(element => {
            total += element.newPrice * element.quantity
        });
        return total
    }



    return (
        <div className="main-content-wrap section-ptb cart-page">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form action="#" className="cart-table">
                            <div className="table-content table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="plantmore-product-thumbnail">Images</th>
                                            <th className="cart-product-name">Product</th>
                                            <th className="plantmore-product-price">Unit Price</th>
                                            <th className="plantmore-product-quantity">Quantity</th>
                                            <th className="plantmore-product-subtotal">Total</th>
                                            <th className="plantmore-product-remove">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>


                                        {
                                            cart && cart.map((item, index) => (
                                                <tr key={index}>
                                                    <td className="plantmore-product-thumbnail">
                                                        <Link onClick={() => handleLinkScrollClick()} to={`/product-detail/${item.slug}`}>
                                                            <img style={{ width: "100px" }} src={item.image} alt="" />
                                                        </Link>
                                                    </td>
                                                    <td className="plantmore-product-name">
                                                        <a href="#">{item.name}</a>
                                                    </td>
                                                    <td className="plantmore-product-price">
                                                        <span className="amount">${item.newPrice}</span>
                                                    </td>
                                                    <td className="plantmore-product-quantity">
                                                        <span onClick={() => dispatch(increaseQuantity(item.id))} style={{ cursor: "pointer", padding: "10px", margin: "5px" }}><i class="fa-solid fa-plus"></i></span>
                                                        <span>{item.quantity}</span>
                                                        <span onClick={() => dispatch(decreaseQuantity(item.id))} style={{ cursor: "pointer", padding: "10px", margin: "5px" }}><i class="fa-solid fa-minus"></i></span>
                                                    </td>
                                                    <td className="product-subtotal">
                                                        <span className="amount">${item.quantity * item.newPrice}</span>
                                                    </td>
                                                    <td className="plantmore-product-remove">
                                                        <span style={{ cursor: "pointer" }} onClick={() => dispatch(removeFromCart(item.id))}>
                                                            <i className="fa fa-times" />
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))
                                        }

                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="coupon-all">
                                        <div className="coupon2">
                                            <Link to="/shop" className=" continue-btn">
                                                Continue Shopping
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-4 ml-auto">
                                    <div className="cart-page-total">
                                        <h2>Cart totals</h2>
                                        <ul>
                                            <li>
                                                Total <span>$ {totalAmount()}</span>
                                            </li>
                                        </ul>
                                        <Link to="/checkout" className="proceed-checkout-btn">
                                            Proceed to checkout
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >

    )
}

export default CartList