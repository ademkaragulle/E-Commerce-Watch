import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../../store/slices/productSlice'
import { addToCart } from '../../../store/slices/cartSlice'
import { addToFavorite, getFavorite } from '../../../store/slices/favoriteSlices'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../Shop.css'

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
        // Sayfanın en üstüne git
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    const filterProduct = (id) => {
        dispatch(fetchProducts(id))
    }


    return (
        <div className="main-content-wrap shop-page section-ptb">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 order-lg-1 order-2">
                        {/* shop-sidebar-wrap start */}
                        <div className="shop-sidebar-wrap">
                            <div className="shop-box-area">
                                {/*sidebar-categores-box start  */}
                                <div className="sidebar-categores-box shop-sidebar mb-30">
                                    <h4 className="title">Product categories</h4>
                                    {/* category-sub-menu start */}
                                    <div className="category-sub-menu">
                                        <ul>
                                            <li style={{ cursor: "pointer" }} onClick={() => dispatch(fetchProducts())} className="has-sub">All</li>
                                            {
                                                categories && categories.map((item, index) => (
                                                    <li style={{ cursor: "pointer" }} onClick={() => filterProduct(item.id)} key={index} className="has-sub">{item.categoryName}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    {/* category-sub-menu end */}
                                </div>
                                {/*sidebar-categores-box end  */}

                            </div>
                        </div>
                        {/* shop-sidebar-wrap end */}
                    </div>
                    <div className="col-lg-9 order-lg-2 order-1">
                        {/* shop-product-wrapper start */}
                        <div className="shop-product-wrapper">
                            {/* shop-products-wrap start */}
                            <div className="shop-products-wrap">
                                <div className="tab-content">
                                    <div className="tab-pane active" id="grid">
                                        <div className="shop-product-wrap">
                                            <div className="row">
                                                {
                                                    data &&
                                                    data.map((item, index) => (
                                                        index < 12 && <div key={index} className="col-lg-4 col-md-6">
                                                            <div className="single-product-area mb-4">
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
                    </div>
                </div>
            </div>
        </div >

    )
}

export default ProductList