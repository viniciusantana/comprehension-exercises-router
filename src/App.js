import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <section>
          <Link to="/">Home</Link>|
          <Link to="/users">Users</Link>|
          <Link to="/about">About</Link>
        </section>
        <Switch>
          <Route path="/about" component={ About } />
          <Route path="/users/:id" render={ (props) => <Users {...props} greetingsMessage="Good Morning" /> } />
          <Route path="/users/" render={ () => <Users  greetingsMessage="Good Morning" /> } />
          <Route path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
      
    );
  }
}

export default App;
