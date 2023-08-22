import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Navbar from "./components/Navbar"
import Post from "./components/Post"
import NewPost from "./components/NewPost"
import SignUp from "./components/SignUp"
import Login from "./components/Login"
import './App.css'

function App() {
  

  return (
<>
    <BrowserRouter>
    <Navbar />


    <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='/posts' element={<Post />} /> 
      <Route path='/newpost' element={<NewPost />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
    
    
    
    </BrowserRouter>

</>
  )
}

function Home() {
  return (
    <div id="home">
  <Login />
  
  <Link to ="/signup">Sign Up</Link>
  </div>
  )
}

export default App
