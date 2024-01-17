import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchProducts } from '../../../store/slices/productSlice';
import axios from 'axios';
import { addToFavorite, getFavorite } from '../../../store/slices/favoriteSlices';
import { addToCart } from '../../../store/slices/cartSlice';

function ProductDetail() {
  const { slug } = useParams("slug");
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
  const relatedProducts = data && [...data].splice(0, 4)
  const product = data && data.find(x => x.slug == slug)


  const whichCategory = (id) => {
    if (categories.length > 0) {
      const category = categories.find(x => x.id == id)
      return category.categoryName
    }
    return ""
  }

  const handleLinkScrollClick = () => {
    // Sayfanın en üstüne git
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const addfavorite = async (product) => {
    if (currentUser) {
      await dispatch(addToFavorite({ "username": currentUser.username, "productId": product.id }))
      await dispatch(getFavorite(currentUser.username))
    }
    else {
      alert("Lütfen Giriş Yapınız")
    }
  }


  const addCart = (product) => {
    dispatch(addToCart(product))
  }

  return (
    product &&
    <div className="main-content-wrap shop-page section-ptb">
      <div className="container">
        <div className="row product-details-inner">
          <div className="col-lg-5 col-md-6">
            {/* Product Details Left */}
            <div className="product-large-slider">
              <div className="pro-large-img img-zoom">
                <img
                  src={`/public/${product.image}`}
                  alt="product-details"
                />
                <a
                  href="assets/images/product/product-01.png"
                  data-fancybox="images"
                >
                  <i className="fa fa-search" />
                </a>
              </div>

            </div>
            {/*// Product Details Left */}
          </div>
          <div className="col-lg-7 col-md-6">
            <div className="product-details-view-content">
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="price-box">
                  <span className="new-price">${product.newPrice}</span>
                  <span className="old-price">${product.oldPrice}</span>
                </div>
                <p>
                  {product.content}
                </p>
                <div className="single-add-to-cart">
                  <div className="cart-quantity d-flex">
                    <button onClick={() => dispatch(addCart(product))} className="add-to-cart">
                      Add To Cart
                    </button>
                  </div>
                </div>
                <ul className="single-add-actions">
                  <li className="add-to-wishlist">
                    <a onClick={() => dispatch(addfavorite(product))} className="add_to_wishlist">
                      <i className="icon-heart" /> Add to Wishlist
                    </a>
                  </li>
                </ul>
                <ul className="stock-cont">
                  <li className="product-stock-status">
                    Categories: {
                      whichCategory(product.categoryId)
                    }
                  </li>
                  <li className="product-stock-status">
                    Gender: <span href="#">{product.gender}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="product-description-area section-pt">
          <div className="row">
            <div className="col-lg-12">
              <div className="product-details-tab">
                <ul role="tablist" className="nav">
                  <li className="active" role="presentation">
                    <a
                      data-bs-toggle="tab"
                      role="tab"
                      href="#description"
                      className="active"
                    >
                      Description
                    </a>
                  </li>
                  <li role="presentation">
                    <a data-bs-toggle="tab" role="tab" href="#reviews">
                      Reviews
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="product_details_tab_content tab-content">
                {/* Start Single Content */}
                <div
                  className="product_tab_content tab-pane active"
                  id="description"
                  role="tabpanel"
                >
                  <div className="product_description_wrap  mt-30">
                    <div className="product_desc mb-30">
                      <p>
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Single Content */}
                {/* Start Single Content */}
                <div
                  className="product_tab_content tab-pane"
                  id="reviews"
                  role="tabpanel"
                >
                  <div className="review_address_inner mt-30">
                    {/* Start Single Review */}
                    <div className="pro_review">
                      <div className="review_thumb">
                        <img
                          alt="review images"
                          src="/assets/images/other/reviewer-60x60.jpg"
                        />
                      </div>
                      <div className="review_details">
                        <div className="review_info mb-10">
                          <h5>
                            Admin - <span> November 19, 2019</span>
                          </h5>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Proin in viverra ex, vitae vestibulum arcu. Duis
                          sollicitudin metus sed lorem commodo, eu dapibus libero
                          interdum. Morbi convallis viverra erat, et aliquet orci
                          congue vel. Integer in odio enim. Pellentesque in
                          dignissim leo. Vivamus varius ex sit amet quam tincidunt
                          iaculis.
                        </p>
                      </div>
                    </div>
                    {/* End Single Review */}
                  </div>
                  {/* Start RAting Area */}
                  <div className="rating_wrap mt-50">
                    <h5 className="rating-title-1">Add a review </h5>
                    <p>
                      Your email address will not be published. Required fields are
                      marked *
                    </p>
                    <h6 className="rating-title-2">Your Rating</h6>
                  </div>
                  {/* End RAting Area */}
                  <div className="comments-area comments-reply-area">
                    <div className="row">
                      <div className="col-lg-12">
                        <form action="#" className="comment-form-area">
                          <div className="row comment-input">
                            <div className="col-md-6 comment-form-author mt-15">
                              <label>
                                Name <span className="required">*</span>
                              </label>
                              <input type="text" required="required" name="Name" />
                            </div>
                            <div className="col-md-6 comment-form-email mt-15">
                              <label>
                                Email <span className="required">*</span>
                              </label>
                              <input type="text" required="required" name="email" />
                            </div>
                          </div>
                          <div className="comment-form-comment mt-15">
                            <label>Comment</label>
                            <textarea
                              className="comment-notes"
                              required="required"
                              defaultValue={""}
                            />
                          </div>
                          <div className="comment-form-submit mt-15">
                            <input
                              type="submit"
                              defaultValue="Submit"
                              className="comment-submit"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single Content */}
              </div>
            </div>
          </div>
        </div>
        <div className="related-product-area section-pt">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3>Related Product</h3>
              </div>
            </div>
          </div>
          <div className="row product-active-lg-4">


            {
              relatedProducts &&
              relatedProducts.map((item, index) => (
                <div key={index} className="col-lg-3 col-md-6">
                  {/* single-product-area start */}
                  <div className="single-product-area mt-30">
                    <div className="product-thumb">
                      <Link onClick={() => handleLinkScrollClick()} to={`/product-detail/${item.slug}`} >
                        <img
                          className="primary-image"
                          src={`/${item.image}`}
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
    </div >

  )
}

export default ProductDetail