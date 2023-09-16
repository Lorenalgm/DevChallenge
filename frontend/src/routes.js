import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import Challenges from './pages/Challenges';
import Dashboard from './pages/Dashboard';
import Detail from './pages/Detail';
import Devs from './pages/Devs';
import Home from './pages/Home';
import MyChallenges from './pages/MyChallenges';
import Submit from './pages/Submit';
import ToDoChallenge from './pages/ToDoChallenge';

import ConstructPage from './pages/ConstructPage';
import { Container } from './styles/GlobalStyles';

import { useAuth } from './hooks/useAuth';
import AdminChallenges from './pages/Admin/Challenges';
import AdminHome from './pages/Admin/Home';
import AdminLogin from './pages/Admin/Login';

const logged = false;

const ProtectedRoute = ({ component: Component, isLogged, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                isLogged ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
};

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
    const { isLogged } = useAuth();

    return (
        <BrowserRouter>
            <ToastContainer />
            <Container>
                <Switch>
                    <Route path="/login" exact component={AdminLogin} />
                    <ProtectedRoute
                        path="/admin/home"
                        exact
                        isLogged={isLogged}
                        component={AdminHome}
                    />
                    <ProtectedRoute
                        path="/admin/challenges"
                        exact
                        isLogged={isLogged}
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
