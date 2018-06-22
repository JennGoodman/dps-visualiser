import * as React from 'react';
import { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
  render() {
    return (
      <ul className="nav">
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
      </ul>
    );
  }
}
