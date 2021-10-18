import React, { Component } from "react";
import { Redirect } from "react-router";

class StrictAcess extends Component {
  render() {
    const { username, password } = this.props.user;
    const login = username === 'joão' && password === '123';
    return (
      <div>
        {login ? "Welcome João" : <Redirect to="/" /> }
      </div>
    )
  }
}

export default StrictAcess;
