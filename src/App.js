import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import StrictAcess from './components/StrictAccess';
import Users from './components/Users';

class App extends Component {
  render() {
    const user = {username: 'joão', password: '123', };
    return (
      <BrowserRouter>
        <section>
          <Link to="/">Home</Link>|
          <Link to="/users">Users</Link>|
          <Link to="/about">About</Link>|
          <Link to="/strict-acess">Strict Acess</Link>
        </section>
        <Switch>
          <Route path="/strict-acess" render={() => <StrictAcess user={ user } /> } />
          <Route path="/about" component={ About } />
          <Route path="/users/:id" render={ (props) => <Users {...props} greetingsMessage="Good Morning" /> } />
          <Route path="/users/" render={ (props) => <Users  {...props} greetingsMessage="Good Morning" /> } />
          <Route path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
      
    );
  }
}

export default App;
