import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faLaptopCode, faFileCode, faSearch, faCode, faShareSquare } from '@fortawesome/free-solid-svg-icons'
import './styles.css';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { Player } from '@lottiefiles/react-lottie-player';
import api from '../../services/api';

export default function Home() {
    const [email, setEmail] = useState('');

    async function handleSubscribe(e) {
        e.preventDefault();

        const data = {
            email,
        }

        try{
            const response = await api.post('newsletter', data);

            alert('Done! You will be the first to know about the new challenges :)')
        }catch(err){
            alert('Oops, something went wrong! Can you try again? :c')
        }
    }

    return (
        <body>
            <Header />
            <section className="banner">
                <div className="typewriter">
                    <h1>Improve your skills</h1>
                </div>
                <h2>with front-end, back-end and mobile challenges</h2>
                <Link to="/challenges">
                    <button>Let's code!</button>
                </Link>
            </section>
            <section className="techs">
                <Link className="challenge-link" to="/challenges">
                    <div>
                        <FontAwesomeIcon className="icon" icon={faFileCode} />
                        <h2>Front-end</h2>
                    </div>
                </Link>
                <Link className="challenge-link" to="/challenges">
                    <div>
                        <FontAwesomeIcon className="icon" icon={faLaptopCode} />
                        <h2>Back-end</h2>
                    </div>
                </Link>
                <Link className="challenge-link" to="/challenges">
                    <div>
                        <FontAwesomeIcon className="icon" icon={faMobileAlt} />
                        <h2>Mobile</h2>
                    </div>
                </Link>
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
            <section className="newsletter">
                <div>
                    <Player
                        autoplay={true}
                        controls={false}
                        loop={true}
                        src="https://assets5.lottiefiles.com/private_files/lf30_WdTEui.json"
                        style={{ height: '300px', width: '300px' }}
                    >
                    </Player>
                </div>
                <div>
                    <h1>Get notified about new challenges!</h1>
                    <p>Sign up to be the first to know about new challenges :)</p>
                    <form onSubmit={handleSubscribe}>
                        <input 
                            type="email" 
                            placeholder="E-mail" 
                            value={email} 
                            onChange={e => setEmail(e.target.value)}
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </section>
        </body>);
}