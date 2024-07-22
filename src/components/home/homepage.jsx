import React from 'react'
import Navbar from './navbar'
import hero from "../../assets/Image.png"
import author from "../../assets/author.png"
import BlogCard from './blogCard'
import Footer from './footer'

const Homepage = () => {
  return (
    <>
      <div className='container'>
        <Navbar />
        <section className="hero-section">
          <div className="hero-img">
            <img src={hero} alt="" />
          </div>

          <div className="hero-card">
            <small>Technology</small>
            <h3>The impact of Technology on the workplace: How Technology is Changing</h3>
            <div className="card-footer">
              <div className="person">
                <img src={author} alt="" />
                <p>Hassan Tomori</p>
                <p>May 10, 2024</p>
              </div>
              <div className="date">
              </div>
            </div>
          </div>
        </section>
        <div className='margin'></div>
        <BlogCard endpoint={'http://127.0.0.1:8000/blog/list'} headers={{}} url='blogs'/>

      </div>
      <Footer />
    </>
  )
}

export default Homepage