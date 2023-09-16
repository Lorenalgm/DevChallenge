import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Challenges from './pages/Challenges';
import Detail from './pages/Detail';
import Devs from './pages/Devs';
import Submit from './pages/Submit';
import MyChallenges from './pages/MyChallenges';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import ToDoChallenge from './pages/ToDoChallenge';

import { Container } from './styles/GlobalStyles';
import ConstructPage from './pages/ConstructPage';
import AdminHome from './pages/Admin/Home';
import AdminChallenges from './pages/Admin/Challenges';

const logged = false;

const LoggedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            logged ? (
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
                    <Route path="/admin/home" exact component={AdminHome} />
                    <Route
                        path="/admin/challenges"
                        exact
                        component={AdminChallenges}
                    />
                    <Route path="/" exact component={Home} />
                    <Route path="/challenges" exact component={Challenges} />
                    <Route path="/challenges/:id/details" component={Detail} />
                    <Route path="/devs" component={Devs} />
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
                    <Route path="/login" component={ConstructPage} />
                </Switch>
            </Container>
            <Footer />
        </BrowserRouter>
    );
}

export default Routes;
