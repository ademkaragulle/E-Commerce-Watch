import React from 'react'
import BreadcrumbArea from '../../components/breadcrumb/BreadcrumbArea'
import CheckoutList from './components/CheckoutList'

function Checkout() {
    return (
        <div>
            <BreadcrumbArea CurrentPage={"Checkout"} />
            <CheckoutList />
        </div>
    )
}

export default Checkout