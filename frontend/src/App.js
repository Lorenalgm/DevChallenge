import './services/firebase-config';
import React from 'react';
import Routes from './routes';
import { ChallengesContextProvider } from './contexts/ChallengesContext';

function App() {
    return (
        <ChallengesContextProvider>
            <Routes />
        </ChallengesContextProvider>
    );
}

export default App;
