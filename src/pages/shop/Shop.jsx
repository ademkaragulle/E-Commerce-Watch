import React from 'react'
import ProductList from './components/ProductList'
import BreadcrumbArea from '../../components/breadcrumb/BreadcrumbArea'

function Shop() {
    return (
        <div>
            <BreadcrumbArea CurrentPage={"shop"} />
            <ProductList />
        </div>
    )
}

export default Shop