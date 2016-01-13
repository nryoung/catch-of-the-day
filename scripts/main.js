import  React from 'react';
import  ReactDom from 'react-dom';

import { Router, Route } from 'react-router';

import { createHistory } from 'history';

/*
 * Import Components
 */
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';
import App from './components/App';

/*
 * Routes
 */
var routes = (
  <Router history={createHistory()}>
    <Route path="/" component={StorePicker}/>
    <Route path="/store/:storeId" component={App}/>
    <Route path="*" component={NotFound}/>
  </Router>
)
ReactDom.render(routes, document.querySelector('#main'));
