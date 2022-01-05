import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { isAuthenticated as logged } from './services/authentication';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Challenges from './pages/Challenges';
import Detail from './pages/Detail';
import Devs from './pages/Devs';
import Submit from './pages/Submit';
import MyChallenges from './pages/MyChallenges';
import Dashboard from './pages/Dashboard';
import Ranking from './pages/Ranking';
import Footer from './components/Footer';
import ToDoChallenge from './pages/ToDoChallenge';

import { Container } from './styles/GlobalStyles';
import CallbackPage from './pages/CallbackPage';


const LoggedRoute = ({ component: Component, ...rest }) => (

    <Route
        {...rest}
        render={(props) =>
            logged() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{ pathname: '/login', state: { from: props.location } }}
                />
            )
        }
    />
);

function Routes() {
    return (
        <BrowserRouter>
            <ToastContainer />
            <Container>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/callback" component={CallbackPage} />
                    <Route path="/challenges" exact component={Challenges} />
                    <Route path="/challenges/:id/details" component={Detail} />
                    <Route path="/devs" component={Devs} />
                    <Route path="/ranking" component={Ranking} />
                    <LoggedRoute path="/submit" component={Submit} />
                    <LoggedRoute
                        path="/dashboard/myChallenges/toDo/:id"
                        component={ToDoChallenge}
                    />
                    <LoggedRoute
                        path="/dashboard/myChallenges"
                        component={MyChallenges}
                    />
                    <LoggedRoute path="/dashboard" component={Dashboard} />
                </Switch>
            </Container>
            <Footer />
        </BrowserRouter>
    );
}

export default Routes;
