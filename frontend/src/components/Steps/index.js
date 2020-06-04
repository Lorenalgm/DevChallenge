import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
    faCode,
    faShareSquare,
} from '@fortawesome/free-solid-svg-icons';

export default function Steps() {
    return (
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
    );
}
