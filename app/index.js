import React, { Component } from 'react';
import { render } from 'react-dom';
import { DefaultRoute, Router, Route, hashHistory, Link, RouteHandler, IndexRoute } from 'react-router';
import App from './views/App';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
), document.getElementById('app'))
