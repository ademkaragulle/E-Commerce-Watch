import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux'
import { getFavorite } from '../../store/slices/favoriteSlices'
import { removeFromCart } from '../../store/slices/cartSlice'
import { Logout, getUserInformation } from '../../store/slices/userSlice'

function Header() {
    const [token, setToken] = useState("")
    const [toggleSearch, setToggleSearch] = useState(false)
    const [searchProduct, setSearchProduct] = useState([]);
    const [searchKey, setSearchKey] = useState("")

    const { data, favoriteItems, cart, currentUser } = useSelector((store) => {
        return {
            data: store.products.data,
            favoriteItems: store.favorite.favoriteItems,
            cart: store.cart.items,
            currentUser: store.currentUser.currentUser,
        }
    })
    const storedToken = sessionStorage.getItem('authToken');
    const dispatch = useDispatch()
    useEffect(() => {
        console.log(storedToken)
        if (storedToken) {
            setToken(storedToken);
        }
        currentUser && dispatch(getFavorite(currentUser.id))
        !currentUser && dispatch(getFavorite(null))

    }, [dispatch, currentUser])


    const totalAmount = () => {
        let total = 0
        cart.forEach(element => {
            total += element.newPrice * element.quantity
        });
        return total
    }

    const Logoutbtn = () => {
        dispatch(getUserInformation())
        // dispatch(getFavorite(null))
        // dispatch(Logout())
    }
    useEffect(() => {

        if (data) {
            searchKey.length >= 3 && setToggleSearch(true);
            searchKey.length < 3 && setToggleSearch(false);
            const findProduct = []
            data.forEach(x => {
                if (x.name.toLowerCase().match(searchKey.toLowerCase())) {
                    findProduct.push(x)
                }
            })
            setSearchProduct(findProduct)
        }
    }, [searchKey])



    const onChangeSearch = (value) => {
        setSearchKey(value)
    }


    return (
        <header className="header">
            {/* Header Top Start */}
            <div className="header-top-area d-none d-lg-block text-color-white bg-gren border-bm-1">
                <div className="container">
                    <div className="row">
                        <div className="col-6 d-flex align-items-center">
                            {
                                !token ?
                                    <Link to={"login-register"} className='btn-login'>Login</Link>
                                    :
                                    <>
                                        <span className='text-light me-3'>Welcome {currentUser&& currentUser}</span>
                                        <div style={{ cursor: "pointer" }} onClick={() => Logoutbtn()} className='btn-login'>Logout</div>
                                    </>
                            }
                        </div>

                        <div className="col-lg-6">
                            <div className="top-info-wrap text-end">
                                <ul className="my-account-container">
                                    {
                                        currentUser &&
                                        <>
                                            <li><Link to="my-account">My account</Link></li>
                                            <li><Link to="wishlist">Wishlist</Link></li>
                                        </>
                                    }
                                    <li><Link to="cart">Cart</Link></li>
                                    <li><Link to="checkout">Checkout</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header Top End */}
            {/* haeader Mid Start */}
            <div className="haeader-mid-area bg-gren border-bm-1 d-none d-lg-block">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-4 col-5">
                            <div className="logo-area">
                                <Link to="/"><img src="../../assets/images/logo/logo.png" alt="" /></Link>
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }} className="col-lg-6">
                            <div className="search-box-wrapper">
                                <div className="search-box-inner-wrap">
                                    <div style={{ position: "relative" }} className="search-box-inner bo">
                                        <div className="search-field-wrap">
                                            <input value={searchKey} onChange={(e) => onChangeSearch(e.target.value)} type="text" className="search-field rounded-2" placeholder="Search product (at least 3 word) ..." />
                                            <div className="search-btn">
                                                <button><i className="icon-magnifier" /></button>
                                            </div>
                                        </div>
                                        {
                                            toggleSearch && searchProduct &&
                                            <div className='searchToggle'>
                                                <ul>
                                                    {
                                                        searchProduct.map((item, index) => (
                                                            index < 3 &&
                                                            <li key={index}>
                                                                <Link className='searchHover' onClick={() => setSearchProduct([])} to={`product-detail/${item.slug}`}>
                                                                    {item.name}
                                                                </Link>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="right-blok-box text-white d-flex">
                                <div className="user-wrap">
                                    <Link to="wishlist">
                                        {favoriteItems && favoriteItems.length > 0 && <span className="cart-total">{favoriteItems.length}</span>}
                                        <i className="icon-heart" />
                                    </Link>
                                </div>
                                <div className="shopping-cart-wrap">
                                    <Link to="cart"><i className="icon-basket-loaded" />
                                        {cart && cart.length > 0 && <span className="cart-total">{cart.length}</span>}
                                    </Link>
                                    <ul className="mini-cart">
                                        {
                                            cart && cart.map((item, index) => (
                                                <li key={index} className="cart-item">
                                                    <div className="cart-image">
                                                        <Link to={`product-detail/${item.slug}`}><img alt="" src={item.image} /></Link>
                                                    </div>
                                                    <div className="cart-title">
                                                        <Link to={`product-detail/${item.slug}`}>
                                                            <h4>{item.name}</h4>
                                                        </Link>
                                                        <div className="quanti-price-wrap">
                                                            <span className="quantity">{item.quantity}</span>
                                                            <div className="price-box">
                                                                <span className="new-price">${item.newPrice}</span>
                                                            </div>
                                                        </div>
                                                        <div style={{ cursor: "pointer" }} onClick={() => dispatch(removeFromCart(item.id))} className="remove_from_cart"><i className="icon_close" /></div>
                                                    </div>
                                                </li>
                                            ))
                                        }

                                        <li className="subtotal-box">
                                            <div className="subtotal-title">
                                                <h3>SubTotal: </h3>
                                                <span>$ {totalAmount()}</span>
                                            </div>
                                        </li>
                                        <li className="mini-cart-btns">
                                            <div className="cart-btns">
                                                <Link to="cart">View cart</Link>
                                                <Link to="checkout">Checkout</Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* haeader Mid End */}
            {/* haeader bottom Start */}
            <div className="haeader-bottom-area bg-gren header-sticky">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 d-none d-lg-block">
                            <div className="main-menu-area white_text">
                                {/*  Start Mainmenu Nav*/}
                                <nav className="main-navigation text-center">
                                    <ul>
                                        <li className="active"><Link to={"/"}>Home</Link></li>
                                        <li><Link to={"shop"}>Shop</Link></li>
                                        <li><Link to={"blog"}>Blog</Link></li>
                                        <li><Link to={"about-us"}>About Us</Link></li>
                                        <li><Link to={"contact-us"}>Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* haeader bottom End */}
        </header >
        /*  Header End */
    )
}

export default Header