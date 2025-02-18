import { useEffect, useState } from 'react'
import author from "../../assets/author.png"
import Navbar from '../home/navbar'
import DOMPurify from 'dompurify'
import Footer from '../home/footer'
// import blog1 from '../../assets/blog1.png'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import API_URL from '../../config'

const BlogDetail = () => {
    const { postId } = useParams()
    console.log(postId)
    const [post, setPost] = useState({})

    useEffect(() => {
        const fetchPost = async () => {
            const response = await axios.get(`${API_URL.BaseUrl}/blog/list/${postId}`)
            console.log(response)
            setPost(response.data)
        }
        fetchPost()
    }, [])

    const sanitizedContent = DOMPurify.sanitize(post.post);

    return (
        <>
            <div className='container'>
                <Navbar />
                <div className="blog-details">
                    <small>{post.category}</small>
                    <h3>{post.title}</h3>
                    <div className="hero-footer">
                        <div className="person">
                            <img src={author} alt="" />
                            <p>{post.author_username}</p>
                            <p>{new Date(post.date_posted).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        </div>
                        <div className="date">
                        </div>
                    </div>
                    <div className="blog-text">
                        <img src={`https://res.cloudinary.com/htcode/${post.image}`} width={'100%'} alt="" />
                        <div dangerouslySetInnerHTML={{ __html: sanitizedContent }}></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default BlogDetail