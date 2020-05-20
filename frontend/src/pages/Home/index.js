import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faLaptopCode, faFileCode, faSearch, faCode, faShareSquare } from '@fortawesome/free-solid-svg-icons'
import './styles.css';

export default function Home() {
    return (
        <body>
            <header>                
                <div>Dev<span>Challenge</span></div>
                <ul>
                    <li className="active">Home</li>
                    <li>Challenges</li>
                </ul>
            </header>
            <section className="banner">
                <div className="typewriter">
                    <h1>Improve your skills</h1>
                </div>
                {/* <h1>Improve your skills</h1> */}
                <h2>with front-end, back-end and mobile challenges</h2>
                <button>Let's code!</button>
            </section>
            <section className="techs">
                <div>
                    <FontAwesomeIcon className="icon" icon={faFileCode} />
                    <h2>Front-end</h2>
                </div>
                <div>
                    <FontAwesomeIcon className="icon" icon={faLaptopCode} />
                    <h2>Back-end</h2>
                </div>
                <div>
                    <FontAwesomeIcon className="icon" icon={faMobileAlt} />
                    <h2>Mobile</h2>
                </div>
            </section>
            <section className="steps">
                <div>
                    <FontAwesomeIcon className="icon-steps" icon={faSearch} />
                    <h2>Choose</h2>
                </div>
                <div>
                    <FontAwesomeIcon className="icon-steps" icon={faCode} />
                    <h2>Code</h2>
                </div>
                <div>
                    <FontAwesomeIcon className="icon-steps" icon={faShareSquare} />
                    <h2>Share</h2>
                </div>
            </section>
        </body>);
}