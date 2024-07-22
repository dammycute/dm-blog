import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../home/navbar';

const Login = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/token/', formData)
                if (response.status === 200){
                    console.log(response)
                    navigate('/add-post')
                    localStorage.setItem('token', response.data.access)
                }
        }catch (error){
            console.error("Error", error)
        }
    }




    return (
        <div className='form-bg'>
            <div className="container">
                
                <div className="form-ctn login">
                <Navbar/>
                    <form onSubmit={handleSubmit}>
                        <h2>LOGIN FORM</h2>
                        <p className='form-paragraph'>Do not have an account yet? <b className='bold'><Link to='/register'>Register Here</Link></b></p>
                        <div className="input-div">
                            <label htmlFor="username">Username</label><br></br>
                            <input type="text" value={formData.username} name='formData.username' onChange={(e) =>{setFormData({...formData, username: e.target.value})}} placeholder='bbpeen' />
                        </div>
                        <div className="input-div">
                            <label htmlFor="password">Password</label><br></br>
                            <input type="password" value={formData.password} name='formData.password' onChange={(e) =>{setFormData({...formData, password: e.target.value})}} placeholder='min 8 chars' />
                        </div>
                        <div className="form-btn">
                            <button type='submit' className=''>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login