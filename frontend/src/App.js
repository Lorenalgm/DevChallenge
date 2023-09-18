import './services/firebase-config';
import React from 'react';
import Routes from './routes';
import { ChallengesContextProvider } from './contexts/ChallengesContext';
import { AuthContextProvider } from './contexts/AuthContext';

function App() {
    return (
        <AuthContextProvider>
            <ChallengesContextProvider>
                <Routes />
            </ChallengesContextProvider>
        </AuthContextProvider>
    );
}

export default App;
