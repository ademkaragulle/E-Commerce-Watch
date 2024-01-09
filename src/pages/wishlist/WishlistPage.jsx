import React from 'react'
import BreadcrumbArea from '../../components/breadcrumb/BreadcrumbArea'
import Wishlist from './components/Wishlist'

function WishlistPage() {
    return (
        <div>
            <BreadcrumbArea CurrentPage={"Wishlist"} />
            <Wishlist />
        </div>
    )
}

export default WishlistPage