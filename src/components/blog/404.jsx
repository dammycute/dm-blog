import React from 'react'
import nopage from "../../assets/404.png"
import { Link } from 'react-router-dom'

const FourOFour = () => {
    return (
        <div className='p404-ctn'>
            <div className="p404">
                <img src={nopage} alt="404 Error" />
                <h1>Oops! Please login to view your blog posts.</h1>
                <div className="btnn">
                <button><Link to='/login'>Go Back</Link></button>
                </div>
            </div>
        </div>
    )
}

export default FourOFour