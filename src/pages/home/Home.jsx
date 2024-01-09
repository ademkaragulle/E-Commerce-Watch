import React from 'react'
import Slider from './components/Slider'
import Banner from './components/Banner'
import ProductArea from './components/ProductArea'
import ProductList from './components/ProductList'
import LatestBlogArea from './components/LatestBlogArea'
import FooterTop from '../../components/footer/FooterTop'

function Home() {
    return (
        <div className="main-wrapper">
            <Slider />
            <ProductArea />
            <Banner />
            <ProductList />
            <LatestBlogArea />
            <FooterTop />
        </div>
    )
}

export default Home