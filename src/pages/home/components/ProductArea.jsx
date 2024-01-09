import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../../store/slices/productSlice'
import { addToCart } from '../../../store/slices/cartSlice'
import { addToFavorite, getFavorite } from '../../../store/slices/favoriteSlices'
import { Link } from 'react-router-dom'

function ProductArea() {


    const { data, currentUser } = useSelector((store) => {
        return {
            data: store.products.data,
            currentUser: store.currentUser.currentUser,
        }
    })

    const bestProduct = data && data.filter(x => x.categoryId == 3)



    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])


    const addCart = (product) => {
        dispatch(addToCart(product))
    }

    const addfavorite = async (product) => {
        if (currentUser) {
            await dispatch(addToFavorite({ ...product, "currentUser": currentUser.id }))
            await dispatch(getFavorite(currentUser.id))
        }
        else {
            alert("Lütfen Giriş Yapınız")
        }
    }

    const handleLinkScrollClick = () => {
        // Sayfanın en üstüne git
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };



    return (
        <div className="product-area section-pb section-pt-30">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h4>Best seller products</h4>
                        </div>
                    </div>
                </div>
                <div className="row product-active-lg-4">
                    {
                        bestProduct &&
                        bestProduct.map((item, index) => (
                            <div key={index} className="col-lg-3 col-md-6">
                                <div className="single-product-area mt-30">
                                    <div className="product-thumb">
                                        <Link onClick={() => handleLinkScrollClick()} to={`/product-detail/${item.slug}`} >
                                            <img
                                                className="primary-image"
                                                src={item.image}
                                                alt=""
                                            />
                                        </Link>
                                        <div className="label-product label_new">{item.categoryId == 1 ? "Fea"
                                            : item.categoryId == 2 ? "New" : item.categoryId == 3 ? "Best" : ""}</div>
                                        <div className="action-links">
                                            <span
                                                style={{ cursor: "pointer" }}
                                                onClick={() => addCart(item)}
                                                className="cart-btn me-2"
                                                title="Add to Cart"
                                            >
                                                <i className="icon-basket-loaded" />
                                            </span>
                                            <span
                                                style={{ cursor: "pointer" }}
                                                onClick={() => addfavorite(item)}
                                                className="wishlist-btn"
                                                title="Add to Wish List"
                                            >
                                                <i className="icon-heart" />
                                            </span>

                                        </div>
                                    </div>
                                    <div className="product-caption">
                                        <h4 className="product-name">
                                            <Link onClick={() => handleLinkScrollClick()} to={`/product-detail/${item.slug}`}>
                                                {item.name}
                                            </Link>
                                        </h4>
                                        <div className="price-box">
                                            <span className="new-price">${item.newPrice}</span>
                                            <span className="old-price">${item.oldPrice}</span>
                                        </div>
                                    </div>
                                </div>
                                {/* single-product-area end */}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    )
}

export default ProductArea