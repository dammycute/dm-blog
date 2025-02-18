import { useEffect, useState } from 'react'
import authImg from "../../assets/author.png"
import axios from 'axios'
import { Link } from 'react-router-dom'

const BlogCard = ({ endpoint, headers, url }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [bloglist, setBlogList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)

    const fetchBlogPosts = async (page) => {
        setIsLoading(true)
        try {
            const response = await axios.get(`${endpoint}?page=${page}`, { headers })
            if (response.data.results) {
                if (page === 1) {
                    setBlogList(response.data.results)
                } else {
                    setBlogList(prev => [...prev, ...response.data.results])
                }
                // Check if there are more pages based on the response
                setHasMore(response.data.next !== null)
            }
        } catch (error) {
            console.error("Failed to fetch blog posts:", error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchBlogPosts(currentPage)
    }, [currentPage, endpoint, headers])

    const handleNextPage = () => {
        if (!isLoading && hasMore) {
            setCurrentPage(prev => prev + 1)
        }
    }

    return (
        <div className='blog-card-ctn'>
            <h3 className='bbb'>Latest Post</h3>
            <div className="blog-flex">
                {bloglist.map((blog, index) => (
                    <Link key={blog.id || index} to={`${url}/blogs/${blog.id}`}>
                        <div className="blog-card">
                            <img 
                                src={`https://res.cloudinary.com/htcode/${blog.image}`} 
                                className='blog-img' 
                                alt={blog.title} 
                            />
                            <small>{blog.category}</small>
                            <h3>{blog.title}</h3>
                            <div className="card-footer">
                                <div className="person">
                                    <img src={authImg} alt="Author" />
                                    <p>{blog.author_username}</p>
                                    <p>{new Date(blog.date_posted).toLocaleDateString('en-US', { 
                                        year: 'numeric', 
                                        month: 'long', 
                                        day: 'numeric' 
                                    })}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="bt">
                {hasMore ? (
                    <button 
                        className='btn' 
                        onClick={handleNextPage} 
                        disabled={isLoading}
                    >
                        {isLoading ? 'Loading...' : 'Load More Posts'}
                    </button>
                ) : (
                    <p>No more posts to load</p>
                )}
            </div>
        </div>
    )
}

export default BlogCard