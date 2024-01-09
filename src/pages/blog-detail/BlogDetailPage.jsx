import React from 'react'
import BreadcrumbArea from '../../components/breadcrumb/BreadcrumbArea'
import BlogDetail from './components/BlogDetail'

function BlogDetailPage() {

    return (
        <div>
            <BreadcrumbArea CurrentPage={"Blog Detail"} />
            <BlogDetail />
        </div>
    )
}

export default BlogDetailPage