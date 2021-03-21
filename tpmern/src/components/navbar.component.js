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
                    <Link to="/" className="nav-link">Liste des utilisateurs</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/:id" className="nav-link">Recherche par ID</Link>
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