import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Post from './components/Post/Post';
import { Routes, Route } from 'react-router-dom';
import './app.css'
function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
