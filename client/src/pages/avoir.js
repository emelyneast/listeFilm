// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


function Avoir() {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/vue">Film/serie vue</Link>
                </li>
            </ul>
        </nav>
    </div>
  );
}

export default Avoir;
