// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../halloween.png'
import '../App.css';

function Home() {
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
                    <li>
                    <Link to="/avoir">Film/serie a voir</Link>
                    </li>
                </ul>
            </nav>
    </div>
  );
}

export default Home;
