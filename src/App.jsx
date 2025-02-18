// import { useState } from 'react'
import './App.css'
import Homepage from './components/home/homepage'
import Blog from './components/blog/blog'
import BlogDetail from './components/blog/blogdetail'
import CreateBlogPost from './components/blog/create-blog'
import Register from './components/auth/register'

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './components/auth/login'
// import MyEditor from './components/blog/draft-form'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="blogs/:postId" element={<BlogDetail />} />
        <Route path="/add-post" element={<CreateBlogPost />} />
        <Route path="/register" element={<Register/>}/>
        <Route path='/login' element={<Login/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
