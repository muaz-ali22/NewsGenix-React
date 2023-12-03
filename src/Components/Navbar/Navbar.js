import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.css";
import logo from "../../Images/a.png";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-{dark}">
        <div className="container-fluid">
          <img src={logo} alt="logo" className="logo" />
          <Link className="navbar-brand" to="">
            NewsGenix
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="in/general">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="in/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="in/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="in/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="in/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="in/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="in/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="in/technology"
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
