import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { GlobalStyles, Container } from './GlobalStyles';

import Header from './components/Header';

function App() {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <ToastContainer />
            <Container>
                <Header />
                <Routes />
            </Container>
        </BrowserRouter>
    );
}

export default App;
