import React        from 'react';
import routes       from './routes.js';
import thunk        from 'redux-thunk';
import reduxPromise from 'redux-promise';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {Router}   from 'react-router';
import {history}  from 'react-router/lib/HashHistory';
import {Provider} from 'react-redux';

import './styles/core.css';

import {
    DevTools, 
    DebugPanel, 
    LogMonitor 
} from 'redux-devtools/lib/react';

import {
    createStore,
    combineReducers,
    applyMiddleware,
    composeMiddleware,
    compose
} from 'redux';

import {
    devTools,
    persistState
} from 'redux-devtools';

injectTapEventPlugin();

import * as reducers from './reducers';

const finalCreateStore = compose(
    applyMiddleware(reduxPromise, thunk),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
    createStore
);

const reducer = combineReducers(reducers);
const store   = finalCreateStore(reducer);

React.render(
    <div>
    <Provider store={store}>
        {() => <Router history={history} children={routes} />}
    </Provider>

    <DebugPanel top bottom right>
        <DevTools store={store}
                monitor={LogMonitor} />
    </DebugPanel>
    </div>,
    document.getElementById('react')
);
