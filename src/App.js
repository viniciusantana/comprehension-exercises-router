import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/about" component={ About } />
          <Route path="/users" component={ Users } />
          <Route path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
      
    );
  }
}

export default App;
