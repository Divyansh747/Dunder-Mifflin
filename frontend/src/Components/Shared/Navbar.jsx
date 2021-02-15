import React from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom';
import "./Styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-steel fixed-top">
            <div className="container">
                <a className="navbar-brand mr-4" to="/">DUNDER MIFFLIN FREELANCIA</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarToggle">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
                        <NavLink className="nav-item nav-link" to="/signup">Register</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;