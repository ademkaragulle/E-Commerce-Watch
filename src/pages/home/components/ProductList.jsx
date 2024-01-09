import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToFavorite, getFavorite } from '../../../store/slices/favoriteSlices'
import { addToCart } from '../../../store/slices/cartSlice'
import { fetchProducts } from '../../../store/slices/productSlice'

function ProductList() {
    const [categories, setCategories] = useState([])

    const { data, currentUser } = useSelector((store) => {
        return {
            data: store.products.data,
            currentUser: store.currentUser.currentUser,
        }
    })

    const fetchCategories = async () => {
        let res = await axios.get("https://localhost:7267/api/Category");
        let categories = res.data;
        setCategories(categories)
    }


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
        fetchCategories()
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
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    return (
        <div className="product-area section-pb section-pt-30">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <ul className="nav product-tab-menu" role="tablist">
                            < li className="product-tab-item nav-item active">
                                <a
                                    onClick={() => dispatch(fetchProducts())}
                                >
                                    All
                                </a>
                            </li>
                            {
                                categories && categories.map((item, index) => (
                                    < li key={index} className="product-tab-item nav-item active">
                                        <a
                                            onClick={() => dispatch(fetchProducts(item.id))}
                                        >
                                            {item.categoryName}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="shop-products-wrap">
                    <div className="tab-content">
                        <div className="tab-pane active" id="grid">
                            <div className="shop-product-wrap">
                                <div className="row">
                                    {
                                        data &&
                                        data.map((item, index) => (
                                            index < 8 && <div key={index} className="col-lg-3 col-md-6">
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
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default ProductList