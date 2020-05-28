import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
      <header>
          <Link className="link" to="/">
            <div>Dev<span>Challenge</span></div>
          </Link>
        <ul>
          <Link className="link" to="/">
          <li>Início</li>
          </Link>
          <Link className="link" to="/challenges">
            <li>Desafios</li>
          </Link>
        </ul>
      </header>
  )
}