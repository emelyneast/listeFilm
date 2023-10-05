import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importez Routes au lieu de Switch
import Vue from './pages/vue';
import Avoir from './pages/avoir';
import Home from './pages/home';
import logo from './halloween.png'

function App() {
  return (
    <Router>
      <div className="App">
       <div id="titre">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1>Film</h1>
      </div>
            
        {/* Barre de navigation, en-tête, etc. */}
        <Routes> {/* Utilisez Routes au lieu de Switch */}
        <Route path="/" element={<Home />} />
        <Route path="/vue" element={<Vue />} />
        <Route path="/Avoir" element={<Avoir />} />
        </Routes>
        {/* Pied de page, etc. */}
       
      </div>
    </Router>
  );
}

export default App;
