import React, { useRef, useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { category } from '../home/footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FourOFour from './404';
import Navbar from '../home/navbar';

const CreateBlogPost = () => {
    const token = localStorage.getItem('token');
    if (!token) {
        return (
            <FourOFour />
        )
    } else {
        const [formData, setFormData] = useState({
            title: '',
            post: '',
            category: '',
            image: ''
        });

        const quillRef = useRef(null);
        const navigate = useNavigate();

        useEffect(() => {
            // Add custom image handler after the component mounts
            const quill = quillRef.current.getEditor();
            quill.getModule('toolbar').addHandler('image', () => showImageUI(quill));
        }, []);

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        };

        const handlePostChange = (content) => {
            setFormData((prevData) => ({
                ...prevData,
                post: content,
            }));
        };

        const showImageUI = (quill) => {
            const input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');
            input.click();

            input.onchange = () => {
                const file = input.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const range = quill.getSelection();
                        const img = e.target.result;
                        quill.insertEmbed(range.index, 'image', img);
                    };
                    reader.readAsDataURL(file);
                }
            };
        };

        const modules = {
            toolbar: [
                [{ header: [1, 2, false] }],
                ['bold', 'italic', 'underline'],
                [{ size: ['small', false, 'large', 'huge'] }],
                ['image', 'video', 'link', 'blockquote', 'code-block'],
                [{ list: 'ordered' }, { list: 'bullet' }],
            ],
        };
        const handleSubmit = async (e) => {
            e.preventDefault();
            const formDataToSubmit = new FormData();
            formDataToSubmit.append('title', formData.title);
            formDataToSubmit.append('post', formData.post);
            formDataToSubmit.append('category', formData.category);
            if (formData.image) {
                formDataToSubmit.append('image', formData.image);
            }



            try {
                const response = await axios.post('http://127.0.0.1:8000/blog/', formDataToSubmit, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`,
                    },
                });
                navigate('/blogs');
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };


        return (
            <div className="form-bg">
                <div className="container">
                    <div className="form-ctn post">
                        <Navbar/>
                        <form onSubmit={handleSubmit}>
                            <h2>Submit New Post</h2>
                            <div className="input-div">
                                <label htmlFor="title">Post Title</label><br />
                                <input type="text" placeholder="Add Title" name="title" value={formData.title} required onChange={handleChange} />
                            </div>
                            <div className="input-div quill">
                                <label htmlFor="post">Post</label>
                                <ReactQuill
                                    ref={quillRef}
                                    theme="snow"
                                    modules={modules}
                                    className="post"
                                    value={formData.post}
                                    onChange={handlePostChange}
                                    required
                                />
                            </div>
                            <div className="ctn">
                                <div className="input-div">
                                    <label htmlFor="category">Category</label><br />
                                    <select name="category" value={formData.category} onChange={handleChange}>
                                        <option value="">Select Category</option>
                                        {category.map((cat, index) => (
                                            <option key={index} value={cat.value}>{cat.name}</option>
                                        ))}
                                    </select>
                                </div>
                                
                                <div className="input-div">
                                    <label htmlFor="image">Upload Image</label><br />
                                    <input
                                        type="file"
                                        name="image"
                                        onChange={(e) => setFormData((prevData) => ({
                                            ...prevData,
                                            image: e.target.files[0],
                                        }))}
                                        required
                                    />
                                </div>
                                <div className="form-btn">
                                    <button type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
}

export default CreateBlogPost;