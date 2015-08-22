import React   from 'react';
import {Route} from 'react-router';

import App     from './components/App.js';
import Home    from './components/Home.js';
import NoMatch from './components/NoMatch.js';

export default (
    <Route component={App}>
        <Route path="/" component={Home}/>
        <Route path="*" component={NoMatch}/>
    </Route>
);
