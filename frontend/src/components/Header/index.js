import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
      <header className="header">
        <div className="title">
          <Link className="link" to="/">
            <div>Dev<span>Challenge</span></div>
          </Link>
        </div>
        <div className="menu">
          <ul>
            <Link className="link" to="/">
            <li>Início</li>
            </Link>
            <Link className="link" to="/challenges">
              <li>Desafios</li>
            </Link>
            <Link className="link" to="/devs">
              <li>Ninjas</li>
            </Link>
          </ul>
        </div>
      </header>
  )
}