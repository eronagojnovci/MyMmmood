// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import YourMood from './pages/YourMood';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/YourMood" element={<YourMood />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
