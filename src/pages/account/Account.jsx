import React from 'react'
import BreadcrumbArea from '../../components/breadcrumb/BreadcrumbArea'
import MyAccount from './components/MyAccount'

function Account() {
    return (
        <div>
            <BreadcrumbArea CurrentPage={"Account"} />
            <MyAccount />
        </div>
    )
}

export default Account