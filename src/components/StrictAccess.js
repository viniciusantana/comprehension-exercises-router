import React, { Component } from "react";
import { Redirect } from "react-router";

class StrictAcess extends Component {
  render() {
    const { username, password } = this.props.user;
    const login = username === 'joão' && password === '123';
    return (
      <div>
        {login ? <h1>"Welcome João"</h1> : <Redirect to="/" /> }
      </div>
    )
  }
}

export default StrictAcess;
