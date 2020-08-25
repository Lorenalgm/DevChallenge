import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Challenges from './pages/Challenges';
import Detail from './pages/Detail';
import Devs from './pages/Devs';
import Login from './pages/Login';
import Submit from './pages/Submit';
import UserChallenges from './pages/UserChallenges';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';

import { Container } from './styles/GlobalStyles';

function Routes() {
    return (
        <BrowserRouter>
            <ToastContainer />
            <Container>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/challenges" exact component={Challenges} />
                    <Route path="/challenges/:id/details" component={Detail} />
                    <Route path="/devs" component={Devs} />
                    <Route path="/login" component={Login} />
                    <Route path="/submit" component={Submit} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route
                        path="/dashboard/myChallenges"
                        component={UserChallenges}
                    />
                </Switch>
            </Container>
            <Footer />
        </BrowserRouter>
    );
}

export default Routes;
