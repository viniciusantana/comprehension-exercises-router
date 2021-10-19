import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import StrictAcess from './components/StrictAccess';
import Users from './components/Users';

class App extends Component {
  constructor(){
    super();
    this.state = {
      Login: '',
      Senha: '',
    }
  }

  handleChange = (event) => {
    const name = event.target.placeholder;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  }

  strictAcess = () => {
    return(
      <>
        <input type="text" placeholder="Login" onChange={this.handleChange} />
        <input type="password" placeholder="Senha" onChange={this.handleChange} />
        <Link to="/strict-acess">Strict Acess</Link>
      </>
    );
  }

  render() {
    const { Login, Senha } = this.state;
    const user = {username: Login, password: Senha, };
    return (
      <BrowserRouter>
        <section>
          <Link to="/">Home</Link>|
          <Link to="/users">Users</Link>|
          <Link to="/about">About</Link>|
          {this.strictAcess()}
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
