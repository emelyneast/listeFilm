// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Vue() {
  return (
    <div >
        <nav>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/avoir">Film/serie a voir</Link>
                </li>
            </ul>
        </nav>
    </div>
  );
}


export default Vue;
