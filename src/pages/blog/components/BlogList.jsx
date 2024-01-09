import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function BlogList() {
    const [blogs, setBlogs] = useState([])

    

    const fetchBlogs = async () => {
        try {
            const response = await axios.get("https://localhost:7267/blogs");
            setBlogs(response.data)
        } catch (error) {
            console.error('Hata:', error);
        }
    };

    useEffect(() => {
        fetchBlogs()
    }, [])

    const handleLinkScrollClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };



    return (
        <div className="main-content-wrap blog-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 order-lg-1 order-1">
                        <div className="blog-wrapper section-pt">
                            <div className="row">
                                {
                                    blogs && blogs.map((item, index) => (
                                        <div key={index} className="col-lg-4 col-md-6">
                                            <div className="singel-latest-blog">
                                                <div className="articles-image">
                                                    <Link onClick={() => handleLinkScrollClick()} to={`/blog-detail/${item.slug}`}>
                                                        <img src={item.image} alt="" />
                                                    </Link>
                                                </div>
                                                <div className="aritcles-content">
                                                    <div className="author-name">
                                                        post by: <span style={{ color: '#c89979' }}> {item.author}</span> - {item.date}
                                                    </div>
                                                    <h4>
                                                        <Link onClick={() => handleLinkScrollClick()} to={`/blog-detail/${item.slug}`} className="articles-name">
                                                            {item.title}
                                                        </Link>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogList