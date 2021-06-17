import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Register from './Register'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/Register" component={Register} />

    </Switch>
  </ BrowserRouter>
  , document.getElementById('root')
);
