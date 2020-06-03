import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Challenges from './pages/Challenges';
import Detail from './pages/Detail';
import Devs from './pages/Devs';
import { ToastContainer } from 'react-toastify';

function Routes() {
    return (
        <BrowserRouter>
            <ToastContainer />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/challenges" component={Challenges} />
                <Route path="/detail/:id" component={Detail} />
                <Route path="/devs" component={Devs} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
