//handle routing in our project
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../container/App';
import RegisterPage from '../components/registerPage';
import LoginPage from '../components/loginPage';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={RegisterPage} />
    <Route path='login' component={LoginPage} />
    <Route path='register' component={RegisterPage} />
  </Route>
);