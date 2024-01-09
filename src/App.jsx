import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'
import Blog from './pages/blog/Blog'
import Contact from './pages/contact/Contact'
import AboutUs from './pages/about-us/AboutUs'
import WishlistPage from './pages/wishlist/WishlistPage'
import Account from './pages/account/Account'
import Cart from './pages/cart/cart'
import Checkout from './pages/checkout/CheckOut'
import LoginRegister from './pages/login-register/LoginRegister'
import BlogDetailPage from './pages/blog-detail/BlogDetailPage'
import ProductDetail from './pages/product-detail/ProductDetailPage'



function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/my-account' element={<Account />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<WishlistPage />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/login-register' element={<LoginRegister />} />
        <Route path='/product-detail/:slug' element={<ProductDetail />} />
        <Route path='/blog-detail/:slug' element={<BlogDetailPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
