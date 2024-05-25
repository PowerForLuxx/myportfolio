import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import AddProject from './pages/AddProject'; 
import Contact from './pages/Contact';
import AppProvider from './Provider/AppProvider'; 
import './App.css';

const App = () => {
  return (
    <Router>
      <AppProvider>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/add-project" element={<AddProject />} /> 
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </AppProvider>
    </Router>
  );
};

export default App;
