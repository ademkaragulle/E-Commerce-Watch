import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToFavorite, getFavorite } from '../../../store/slices/favoriteSlices'
import { Link } from 'react-router-dom'
import { addToCart } from '../../../store/slices/cartSlice'

function Wishlist() {


    const dispatch = useDispatch()
    useEffect(() => {
        currentUser &&
            dispatch(getFavorite(currentUser.id))
    }, [])


    const { data, currentUser } = useSelector((store) => {
        return {
            data: store.favorite.favoriteItems,
            currentUser: store.currentUser.currentUser,
        }
    })


    const handleLinkScrollClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const addCart = (item) => {
        dispatch(addToCart(item))
    }

    const removeFavorite = async (product) => {
        if (currentUser) {
            await dispatch(addToFavorite({ ...product, "currentUser": currentUser.id }))
            await dispatch(getFavorite(currentUser.id))
        }
        else {
            alert("Lütfen Giriş Yapınız")
        }
    }


    return (
        <div className="main-content-wrap section-ptb">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form action="#" className="cart-table">
                            <div className=" table-content table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="plantmore-product-thumbnail">Images</th>
                                            <th className="cart-product-name">Product</th>
                                            <th className="plantmore-product-price">Unit Price</th>
                                            <th className="plantmore-product-add-cart">Add to cart</th>
                                            <th className="plantmore-product-remove">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data && data.map((item, index) => (
                                                <tr key={index}>
                                                    <td className="plantmore-product-thumbnail">
                                                        <Link onClick={() => handleLinkScrollClick()} to={`/product-detail/${item.slug}`}>
                                                            <img style={{ width: "100px" }} src={item.image} alt="" />
                                                        </Link>
                                                    </td>
                                                    <td className="plantmore-product-name">
                                                        <Link onClick={() => handleLinkScrollClick()} to={`/product-detail/${item.slug}`}>{item.name}</Link>
                                                    </td>
                                                    <td className="plantmore-product-price">
                                                        <span className="amount">{item.newPrice}</span>
                                                    </td>
                                                    <td className="plantmore-product-add-cart">
                                                        <div onClick={() => addCart(item)} className='btn btn-black p-2'>add to cart</div>
                                                    </td>
                                                    <td onClick={() => removeFavorite(item)} className="plantmore-product-remove">
                                                        <div style={{ cursor: "pointer" }}>
                                                            <i className="fa fa-times" />
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Wishlist