import React from 'react';
import { Link } from 'react-router-dom';

export default function Banner() {
    return (
        <section className="banner">
            <div className="typewriter">
                <h1>Melhore suas habilidades</h1>
            </div>
            <h2>Com desafios de front-end, back-end e mobile</h2>
            <Link to="/challenges">
                <button type="button">Bora codar!</button>
            </Link>
        </section>
    );
}
