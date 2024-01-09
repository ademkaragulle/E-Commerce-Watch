import React from 'react'
import Content from './components/Content'
import BreadcrumbArea from '../../components/breadcrumb/BreadcrumbArea'

function AboutUs() {
    return (
        <div>
            <BreadcrumbArea CurrentPage={"About"} />
            <Content />
        </div>
    )
}

export default AboutUs