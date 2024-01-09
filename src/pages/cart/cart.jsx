import React from 'react'
import BreadcrumbArea from '../../components/breadcrumb/BreadcrumbArea'
import CartList from './components/CartList'

function cart() {
    return (
        <div>
            <BreadcrumbArea CurrentPage={"Cart"} />
            <CartList />
        </div>
    )
}

export default cart