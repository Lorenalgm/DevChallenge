import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faLaptopCode, faFileCode, faSearch, faCode, faShareSquare } from '@fortawesome/free-solid-svg-icons'
import './styles.css';
export default function Home() {
    return (
        <body>
            <header>
                <div>DevChallenge</div>
                <ul>
                    <li>Home</li>
                    <li>Challenges</li>
                </ul>
            </header>
            <section className="banner">
                <h1>Improve your skills</h1>
                <h2>with front-end, back-end and mobile challenges</h2>
                <button>Let's code!</button>
            </section>
            <section className="techs">
                <div>
                    <FontAwesomeIcon icon={faFileCode} />
                    Front-end
                </div>
                <div>
                    <FontAwesomeIcon icon={faLaptopCode} />
                    Back-end
                </div>
                <div>
                    <FontAwesomeIcon icon={faMobileAlt} />
                    Mobile
                </div>
            </section>
            <section className="steps">
                <div>
                    <FontAwesomeIcon icon={faSearch} />
                    Choose
                </div>
                <div>
                    <FontAwesomeIcon icon={faCode} />
                    Code
                </div>
                <div>
                    <FontAwesomeIcon icon={faShareSquare} />
                    Share
                </div>
            </section>
        </body>);
}