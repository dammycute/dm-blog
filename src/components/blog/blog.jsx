import React, { useState } from 'react'
import hero from "../../assets/Image.png"
import author from "../../assets/author.png"
import Navbar from '../home/navbar'
import BlogCard from '../home/blogCard'
import Footer from '../home/footer'
import FourOFour from './404'

const Blog = () => {
  const token = localStorage.getItem("token");
  if (!token){
    return(<>
      <FourOFour/>
    </>)
  }else{
    return (
      <>
      <div className='container'>
        <Navbar/>
        <div className="blog-hero-ctn">
          <div className="hero-img">
            <img src={hero} alt="" />
          </div>
          <div className="blog-hero">
            <small>Technology</small>
            <h3>The impact of Technology on the workplace: How Technology is Changing</h3>
            <div className="hero-footer">
              <div className="person">
                <img src={author} alt="" />
                <p>Hassan Tomori</p>
                <p>May 10, 2024</p>
              </div>
              <div className="date">
              </div>
            </div>
          </div>
        </div>
        <BlogCard endpoint={'http://127.0.0.1:8000/blog'} headers={{Authorization: `Bearer ${token}`}} url=''/>
        
      </div>
      <Footer/>
      </>
      
    )
  }
    
}

export default Blog