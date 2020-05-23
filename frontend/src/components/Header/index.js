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
          <li>Home</li>
          </Link>
          <Link className="link" to="/challenges">
            <li>Challenges</li>
          </Link>
        </ul>
      </header>
  )
}