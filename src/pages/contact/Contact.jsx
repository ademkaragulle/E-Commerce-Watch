import React from 'react'
import Content from './components/Content'
import BreadcrumbArea from '../../components/breadcrumb/BreadcrumbArea'

function Contact() {
    return (
        <div>
            <BreadcrumbArea CurrentPage={"Contact"} />
            <Content />
        </div>
    )
}

export default Contact