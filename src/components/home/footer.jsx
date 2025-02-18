// import React from 'react'
// import { bloglist } from './blogCard'
import { navlist } from './navbar'

import { category } from './category'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="foot-ctn">
                    <div className="col">
                        <h3>About</h3>
                        <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem architecto quod sed minima laboriosam voluptate incidunt.</p>
                        <p><strong>Email:</strong> info@dmblog.com</p>
                        <p><strong>Phone:</strong> 0700 000 0000</p>
                    </div>
                    <div className="col lg">
                        <div className="quick-links">
                            <h2>Quick Link</h2>
                            <div className="nav-foot">
                                {
                                    navlist.map((nav, index) => (
                                        <li key={index}>{nav.name}</li>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="category">
                            <h2>Category</h2>
                            <div className="cat-link">
                                {
                                    category.map((cate, index) => (
                                        <li key={index}>{cate.name}</li>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="foot-form">
                            <h4>Weekly Newsletter</h4>
                            <p>Get blog articles and offers via email</p>
                            <input type="text" placeholder='Your Email' />
                            <button>Subcribe</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer