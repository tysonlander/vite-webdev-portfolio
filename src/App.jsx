import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
    return (
        <Router>
            <div className="h-screen">
                {/* @todo header */}
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} exact />
                    <Route path="/about" element={<AboutPage />} exact />
                    <Route path="/projects" element={<ProjectsPage />} exact />
                    {/* <Route path='/profile' element={<Profile />} exact /> */}
                </Routes>
                {/* @todo footer */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
