import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Acceuil</Link>
        <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                    <Link to="/edit" className="nav-link">Modificaation</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/add" className="nav-link">Nouvel utilisateur</Link>
                </li>
            </ul>
        </div>
      </nav>
    );
  }
}