import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GlobalStyles } from './GlobalStyles';
import i18n from './i18n';

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles />
        <Suspense fallback={(<div>...</div>)}>
            <App />
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
