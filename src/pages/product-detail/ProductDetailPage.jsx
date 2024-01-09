import React from 'react'
import ProductDetail from './components/ProductDetail'
import BreadcrumbArea from '../../components/breadcrumb/BreadcrumbArea'

function ProductDetailPage() {
    return (
        <div className="main-content-wrap shop-page section-ptb">
            <BreadcrumbArea CurrentPage={"Product Detail"} />
            <ProductDetail />
        </div>
    )
}

export default ProductDetailPage