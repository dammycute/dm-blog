import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../home/navbar'




const Register = () => {

    const [formData, setFormData] = useState({
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        profile: {
            image: null,
            bio: "",
            socio_insta: "",
            socio_x: "",
            website: "",
        }
    })

    const navigate = useNavigate()

    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState(null)

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            if(formData.password !== confirmPassword){
                setError('Passwords do not match!')
            }else{
                const response = await axios.post('http://127.0.0.1:8000/users/register', formData)
            console.log(response)
            if (response.status === 201) {
                console.log(response.data)
                navigate('/login')
            }
        }
            }
             catch (error) {
            console.error("Error", error)
        }
    }

    return (
        <div className='form-bg'>
            <div className="container">
                <div className="form-ctn">
                    <Navbar/>
                    <form action="" onSubmit={handleSubmit}>
                        <h2>REGISTRATION FORM</h2>
                        <p className='form-paragraph'>Already have an account? <b className='bold'><Link to='/login'>Login Here</Link></b></p>
                        <div className="ctn">
                            <div className="input-div">
                                <label htmlFor="username">Username</label><br></br>
                                <input type="text" value={formData.username} name='formData.username' onChange={(e) => { setFormData({ ...formData, username: e.target.value }) }} placeholder='bbpeen' />
                            </div>
                            <div className="input-div">
                                <label htmlFor="first name">First Name</label><br></br>
                                <input type="text" value={formData.first_name} name='formData.first_name' onChange={(e) => { setFormData({ ...formData, first_name: e.target.value }) }} placeholder='Ben Baduru' />
                            </div>
                        </div>

                        <div className="input-div">
                            <label htmlFor="email">Email</label><br></br>
                            <input type="email" value={formData.email} name='formData.email' onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} placeholder='bbpen@example.com' />
                        </div>

                        <div className="ctn">
                            <div className="input-div">
                                <label htmlFor="password">Password</label><br></br>
                                <input type="password" value={formData.password} name='formData.password' onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }} placeholder='min 8 chars' />
                            </div>
                            <div className="input-div">
                                <label htmlFor="password">Confirm Password</label><br></br>
                                <input type="password" placeholder='' value={confirmPassword} onChange={handleConfirmPassword}/>
                            </div>
                        </div>

                        <div className="ctn">
                            <div className="input-div">
                                <label htmlFor="bio">Bio</label><br></br>
                                <textarea value={formData.profile.bio} name='formData.profile.bio' onChange={(e) => { setFormData({ ...formData, profile: { ...formData.profile, bio: e.target.value } }) }} placeholder='Share a little about your self..' />
                            </div>
                            <div className="input-div ">
                                <label htmlFor="username">Social Media Links</label><br></br>
                                <input type="text" value={formData.profile.socio_insta} name='formData.profile.socio_insta' onChange={(e) => { setFormData({ ...formData, profile: { ...formData.profile, socio_insta: e.target.value } }) }} className='social' placeholder='Instagram' />
                                <input type="text" value={formData.profile.socio_x} name='formData.profile.socio_x' onChange={(e) => { setFormData({ ...formData, profile: { ...formData.profile, socio_x: e.target.value } }) }} className='social' placeholder='twitter' />
                                <input type="text" value={formData.profile.website} name='formData.profile.website' onChange={(e) => { setFormData({ ...formData, profile: { ...formData.profile, website: e.target.value } }) }} placeholder='website' />
                            </div>
                        </div>
                        {/* <div className="input-div">
                            <label htmlFor="picture">Profile Pic</label><br></br>
                            <input type='image' onChange={(e) => { setFormData({ ...formData, profile: { ...formData.profile, image: e.target.files[0] } }) }} placeholder='bbpen@example.com' />
                        </div> */}
                        {error && <p className='error'>{error}</p>}

                        <div className="form-btn">
                            <button type='submit' className=''>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register