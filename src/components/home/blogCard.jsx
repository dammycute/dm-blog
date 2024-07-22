import React, { useEffect, useState } from 'react'
import first from "../../assets/1.png"
import second from "../../assets/2.png"
import third from "../../assets/3.png"
import fourth from "../../assets/4.png"
import five from "../../assets/5.png"
import six from "../../assets/6.png"
import seven from "../../assets/7.png"
import eight from "../../assets/8.png"
import nine from "../../assets/9.png"
import authImg from "../../assets/author.png"
import axios from 'axios'
import { Link } from 'react-router-dom'


const BlogCard = ({ endpoint, headers, url }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [bloglist, setBlogList] = useState([])

    useEffect(() => {
        const handleGetBlog = async () => {
            // e.preventDefault()
            try {
                const response = await axios.get(`${endpoint}?page=${currentPage}`, { headers })
                setBlogList(response.data.results)
                console.log(response.data)
                if (!response) {
                    console.log("You are Unauthorized")
                }
            } catch (error) {
                console.error(error)
            }
        }
        handleGetBlog();
    }, []);

    const handleNextPage = async () => {
        setCurrentPage(currentPage + 1)
    }


    return (
        <div className='blog-card-ctn'>
            <h3 className='bbb'>Latest Post</h3>
            <div className="blog-flex">
                {
                    bloglist.map((blog, index) => (
                        <Link key={index} to={`${url}/${blog.id}`}>
                            <div className="blog-card">
                                <img src={`https://res.cloudinary.com/htcode/${blog.image}`} className='blog-img' alt="" />
                                <small>{blog.category}</small>
                                <h3>{blog.title}</h3>
                                <div className="card-footer">
                                    <div className="person">
                                        <img src={authImg} alt="" />
                                        <p>{blog.author_username}</p>
                                        <p>{new Date(blog.date_posted).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                    </div>

                                </div>
                            </div>
                        </Link>

                    ))
                }
            </div>
            <div className="bt">
                <button className='btn' onClick={handleNextPage}>View All Post</button>
            </div>
        </div>
    )
}

export default BlogCard