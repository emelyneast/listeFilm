import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Importations nécessaires
import Vue from './pages/vue';
import Avoir from './pages/avoir';
import Home from './pages/home';
import logo from './halloween.png';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <nav className="navbar">
          <img src={logo} className="App-logo" alt="logo" />
        
        {/* Barre de navigation */}
       
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link to="/vue" className="nav-link">Film/serie vue</Link>
            </li>
            <li className="nav-item">
              <Link to="/avoir" className="nav-link">Film/serie a voir</Link>
            </li>
          </ul>
        </nav>

        {/* Contenu de la page */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vue" element={<Vue />} />
          <Route path="/avoir" element={<Avoir />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
