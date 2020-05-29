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
            await api.post('newsletter', data);

            alert('Feito! Você será o primeiro a saber sobre novos desafios :)')
        }catch(err){
            alert('Opa, algo deu errado! Pode tentar novamente? :c')
        }
    }

    return (
        <body>
            <Header />
            <section className="banner">
                <div className="typewriter">
                    <h1>Melhore suas habilidades</h1>
                </div>
                <h2>Com desafios de front-end, back-end e mobile</h2>
                <Link to="/challenges">
                    <button>Bora codar!</button>
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
                    <h2>Escolha</h2>
                </div>
                <div>
                    <FontAwesomeIcon className="icon-steps" icon={faCode} />
                    <h2>Desenvolva</h2>
                </div>
                <div>
                    <FontAwesomeIcon className="icon-steps" icon={faShareSquare} />
                    <h2>Compartilhe</h2>
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
                    <h1>Seja notificado sobre novos desafios!</h1>
                    <p>Inscreva-se para ser o primeiro a saber sobre novos desafios :)</p>
                    <form  className="newsletter-form" onSubmit={handleSubscribe}>
                        <input 
                            type="email" 
                            placeholder="E-mail" 
                            value={email} 
                            onChange={e => setEmail(e.target.value)}
                        />
                        <button type="submit">Inscrever</button>
                    </form>
                </div>
            </section>
        </body>);
}