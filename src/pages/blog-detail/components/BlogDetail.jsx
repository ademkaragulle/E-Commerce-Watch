import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


function BlogDetail() {
    const { slug } = useParams("slug");
    const [blogs, setBlogs] = useState([])
    const [blog, setBlog] = useState({})
    const [message, setMessage] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [website, setWebsite] = useState("")
    const [comments, setComments] = useState([])


    const fetchBlogs = async () => {
        try {
            const response = await axios.get("https://localhost:7267/blogs");
            const currentBlog = await response.data.find(x => x.slug == slug)
            await setBlogs(response.data)
            await setBlog(currentBlog)
            const response2 = await axios.get("https://localhost:7267/comments");
            const blogComments = await response2.data.filter(x => x.blogId == currentBlog.id)
            await setComments(blogComments)
        } catch (error) {
            console.error('Hata:', error);
        }
    };


    const getPostComments = async () => {
        try {
            const response = await axios.get("https://localhost:7267/comments");
            const blogComments = await response.data.filter(x => x.blogId == blog.id)
            await setComments(blogComments)
        } catch (error) {
            console.error('Hata:', error);
        }
    }

    useEffect(() => {
        fetchBlogs()
        getPostComments()
    }, [slug])


    const handleLinkScrollClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const sendComment = async () => {
        const date = new Date()
        if (confirm("Do you want to send the comment?") == true) {
            const newComment = await {
                "message": message,
                "Name": name,
                "Email": email,
                "Website": website,
                "BlogId": blog.id,
            }
            try {
                const response = await fetch('https://localhost:7267/addcomments', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newComment),
                });
                setMessage("")
                setName("")
                setEmail("")
                setWebsite("")
            } catch (error) {
                console.error('Hata:', error.message);
            }
        } else {
            alert("comment is canceled")
        }

        getPostComments()

    }


    return (
        <>
            {
                blog && <div className="main-content-wrap shop-page section-ptb">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-12 order-lg-2 order-1">
                                <div className="blog-wrapper">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            {/* single-blog-wrap Start */}
                                            <div className="single-blog-wrap mb-40">
                                                <div className="latest-blog-content mt-0">
                                                    <h4>
                                                        <div>{blog.title}</div>
                                                    </h4>
                                                    <ul className="post-meta">
                                                        <li className="post-author">
                                                            By <a href="#">{blog.author} </a>
                                                        </li>
                                                        <li className="post-date">{blog.date}</li>
                                                    </ul>
                                                </div>
                                                <div className="latest-blog-image d-flex justify-content-center">
                                                    <div>
                                                        <img className='w-100 img-fluid' src={`/${blog.image}`} alt="" />
                                                    </div>
                                                </div>
                                                <div className="latest-blog-content mt-20">
                                                    <p>
                                                        {blog.shortContent}
                                                    </p>

                                                    <p>
                                                        {blog.longContent}
                                                    </p>
                                                </div>
                                                <div className="meta-sharing">
                                                    <div className="row align-items-center">
                                                        <div className="col-lg-6">
                                                            <div className="entry-meta mt-15">
                                                                Tags: <a href="#">Watch</a>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <ul className="social-icons text-end">
                                                                <li>
                                                                    <a
                                                                        className="facebook social-icon"
                                                                        href="https://www.facebook.com/"
                                                                        title="Facebook"
                                                                        target="_blank"
                                                                    >
                                                                        <i className="fa fa-facebook" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="twitter social-icon"
                                                                        href="https://twitter.com/"
                                                                        title="Twitter"
                                                                        target="_blank"
                                                                    >
                                                                        <i className="fa fa-twitter" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="instagram social-icon"
                                                                        href="https://www.instagram.com"
                                                                        title="Instagram"
                                                                        target="_blank"
                                                                    >
                                                                        <i className="fa fa-instagram" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="linkedin social-icon"
                                                                        href="https://www.linkedin.com/"
                                                                        title="Linkedin"
                                                                        target="_blank"
                                                                    >
                                                                        <i className="fa fa-linkedin" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* single-blog-wrap End */}
                                        </div>
                                    </div>
                                    <div className="related-post-blog-area">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="section-title">
                                                    <h4>Related posts</h4>
                                                </div>
                                            </div>
                                        </div>
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
                                    <div>
                                        <hr />
                                        <h2>Comments</h2>
                                        {
                                            comments && comments.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="product_tab_content tab-pane"
                                                    id="reviews"
                                                    role="tabpanel"
                                                >
                                                    <div className="review_address_inner mt-30">
                                                        {/* Start Single Review */}
                                                        <div className="pro_review">
                                                            <div style={{ width: "100%" }} className="review_details">
                                                                <div className="review_info mb-10 w-100">
                                                                    <h5>
                                                                        {item.name} - <span style={{ fontSize: "13px" }}>{item.date.split("T")[0]}</span>
                                                                    </h5>
                                                                </div>
                                                                <p>
                                                                    {item.message}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="comments-area comments-reply-area section-pt">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <h5>Leave a Reply</h5>
                                                        <p>
                                                            Your email address will not be published. Required fields
                                                            are marked *
                                                        </p>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="comment-form-area">
                                                            <div className="comment-form-comment mt-15">
                                                                <label>Comment</label>
                                                                <textarea
                                                                    value={message}
                                                                    onChange={(e) => setMessage(e.target.value)}
                                                                    className="comment-notes"
                                                                    required="required"
                                                                />
                                                            </div>
                                                            <div className="row comment-input">
                                                                <div className="col-md-4 comment-form-author mt-15">
                                                                    <label>
                                                                        Name <span className="required">*</span>
                                                                    </label>
                                                                    <input
                                                                        value={name}
                                                                        onChange={(e) => setName(e.target.value)}
                                                                        type="text" required="required" name="Name" />
                                                                </div>
                                                                <div className="col-md-4 comment-form-email mt-15">
                                                                    <label>
                                                                        Email <span className="required">*</span>
                                                                    </label>
                                                                    <input
                                                                        value={email}
                                                                        onChange={(e) => setEmail(e.target.value)}
                                                                        type="text" required="required" name="email" />
                                                                </div>
                                                                <div className="col-md-4 comment-form-email mt-15">
                                                                    <label>Website</label>
                                                                    <input
                                                                        value={website}
                                                                        onChange={(e) => setWebsite(e.target.value)}
                                                                        type="text" />
                                                                </div>
                                                            </div>
                                                            <div className="comment-form-submit mt-30">
                                                                <input
                                                                    onClick={() => sendComment()}
                                                                    type="submit"
                                                                    defaultValue="Post Comment"
                                                                    className="comment-submit"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

            }
        </>
    )
}

export default BlogDetail