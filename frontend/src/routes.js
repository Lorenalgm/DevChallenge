import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Challenges from './pages/Challenges';
import Detail from './pages/Detail';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/challenges" component={Challenges} />
                <Route path="/detail/:id" component={Detail} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;