import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header>
        <Link to={'/'}>
          <h1>dps visualiser</h1>
        </Link>
      </header>
    );
  }
}
