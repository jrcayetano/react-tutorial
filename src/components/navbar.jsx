import React, { Component } from 'react';

//Stateless FUnctional Component
const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{' '}
        <badge className="badge-pill badge-secondary">
          {props.totalCounters}
        </badge>
      </a>
    </nav>
  );
};

export default NavBar;
