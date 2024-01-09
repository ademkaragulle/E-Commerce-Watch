import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function LatestBlogArea() {
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
        <div>
            <div className="letast-blog-area section-pb">
                <div className="container">
                    <div className="row">
                        {
                            blogs &&
                            blogs.map((item, index) => (
                                index < 3 &&
                                <div key={index} className="col-lg-4 col-md-6">
                                    <div className="single-latest-blog mt-30">
                                        <div className="latest-blog-image">
                                            <Link onClick={() => handleLinkScrollClick()} to={`/blog-detail/${item.slug}`} >
                                                <img src={`/${item.image}`} alt="" />
                                            </Link>
                                        </div>
                                        <div className="latest-blog-content mt-20">
                                            <Link onClick={() => handleLinkScrollClick()} to={`/blog-detail/${item.slug}`} >
                                                <h4>
                                                    {item.title}
                                                </h4>
                                            </Link>
                                            <ul className="post-meta">
                                                <li className="post-date"> {item.date}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LatestBlogArea