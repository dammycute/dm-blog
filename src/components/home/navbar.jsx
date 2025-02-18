import { useState } from 'react'
import { Link } from 'react-router-dom'

export const navlist = [
    {
        name: 'Home',
        navlink: '/'
    },
    {
        name: 'Blog',
        navlink: '/blogs'
    },
    {
        name: 'Create Post',
        navlink: '/add-post'
    },
    {
        name: 'Register',
        navlink: '/register'
    },
    {
        name: 'Login',
        navlink: '/login'
    }
]

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false)

    const toogleMenu = () => {
        setMenuActive(!menuActive)
    }
    return (
        <div>
            <div className="nav-flex">
                <div className={`logo ${menuActive ? 'hide' : ''}`}>
                    <a href="/">Dm-blog</a>
                </div>
                <div className="menu-toogle" onClick={toogleMenu}>
                    &#9776;
                </div>
                <div className={`nav ${menuActive ? 'active' : ''}`}>
                    {
                        navlist.map((nav, index) => (
                            <li key={index}><Link to={nav.navlink}>{nav.name}</Link></li>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar