import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import Cookie from 'universal-cookie';

import Main from './components/Main';
import HomeStudent from './components/student/HomeStudent';
import Home from './components/Home';
import NotFound from './components/error/NotFound';

ReactDOM.render(
  <Router history={browserHistory}>
  <Route path='/' component={Main}>
    <Route path='info' component={HomeStudent}></Route>
    <IndexRoute component={Home}></IndexRoute>
  </Route>
  <Route path='/*' component={NotFound}></Route>

</Router>, document.getElementById('app'))
