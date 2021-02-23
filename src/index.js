import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Qoute from './components/Qoute';
import Home from './components/Home';

ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/App" exact component={App} />
        <Route path="/Qoute" exact component={Qoute} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
