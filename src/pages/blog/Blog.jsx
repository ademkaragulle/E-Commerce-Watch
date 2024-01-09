import React from 'react'
import BreadcrumbArea from '../../components/breadcrumb/BreadcrumbArea'
import BlogList from './components/BlogList'

function Blog() {
    return (
        <div>
            <BreadcrumbArea CurrentPage={"Blog"} />
            <BlogList />
        </div>
    )
}

export default Blog