import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetails from './components/ProjectDetails';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <Router basename="/vinch"> {/* Replace with your repository name */}
      <Routes>
        <Route path="/" element={
          <div className="App">
            <Header />
            <Hero />
            <Projects />
            <Footer />
          </div>
        } />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
