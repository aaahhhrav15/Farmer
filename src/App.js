import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Voter from './components/Voter';
import Election from './components/Election';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/voter" element={<Voter />} />
        <Route path="/election" element={<Election />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
