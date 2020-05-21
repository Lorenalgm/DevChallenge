import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Challenges from './pages/Challenges';
import Challenge from './pages/Challenge';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/challenges" component={Challenges} />
                <Route path="/challenges/:id" component={Challenge} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;