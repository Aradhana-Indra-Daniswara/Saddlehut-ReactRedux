import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import './app.css'
function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </div>
    );
}

export default App;
