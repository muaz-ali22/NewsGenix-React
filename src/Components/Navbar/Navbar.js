import { Link } from "react-router-dom";
import React, { Component } from "react";
import { PropTypes } from "prop-types";
import "./Navbar.css";
import flag1 from "./Flags/uae.png";
import flag2 from "./Flags/aus.png";
import flag3 from "./Flags/bel.jpg";
import flag4 from "./Flags/bra.png";
import flag5 from "./Flags/ca.png";
import flag6 from "./Flags/fr.png";
import flag7 from "./Flags/gr.png";
import flag8 from "./Flags/in.png";
import flag9 from "./Flags/mo.png";
import as from "./Flags/as.png";
import us from "./Flags/us.png";
import ar from "./Flags/ar.png";
import logo from "../../Images/a.png";
export default class Navbar extends Component {
  static defaultProps = {
    pageSize: 6,
    NewsType: "Top Headlines",
    category: "health",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    NewsType: PropTypes.string,
    category: PropTypes.string,
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-{dark}">
          <div className="container-fluid">
            <img src={logo} alt="logo" className="logo" />
            <Link
              className="navbar-brand"
              to={`${this.props.country}/technology`}
            >
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="#">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Countries
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/ar">
                        <img
                          src={ar}
                          alt="ar"
                          style={{ width: "30px", marginRight: "10px" }}
                        />
                        Argentina
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/at">
                        <img
                          src={as}
                          alt="at"
                          style={{ width: "30px", marginRight: "10px" }}
                        />
                        Austria
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/au">
                        <img
                          src={flag2}
                          alt="au"
                          style={{ width: "30px", marginRight: "10px" }}
                        />
                        Australia
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/be">
                        <img
                          src={flag3}
                          alt="be"
                          style={{ width: "30px", marginRight: "10px" }}
                        />
                        Belgium
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item" to="/br">
                        <img
                          src={flag4}
                          alt="br"
                          style={{ width: "30px", marginRight: "10px" }}
                        />
                        Brazil
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/ca">
                        <img
                          src={flag5}
                          alt="ca"
                          style={{ width: "30px", marginRight: "10px" }}
                        />
                        Canada
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item" to="/fr">
                        <img
                          src={flag6}
                          alt="fr"
                          style={{ width: "30px", marginRight: "10px" }}
                        />
                        France
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/de">
                        <img
                          src={flag7}
                          alt="de"
                          style={{ width: "30px", marginRight: "10px" }}
                        />
                        Germany
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/in">
                        <img
                          src={flag8}
                          alt="in"
                          style={{ width: "30px", marginRight: "10px" }}
                        />
                        India
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/ma">
                        <img
                          src={flag9}
                          alt="ma"
                          style={{ width: "30px", marginRight: "10px" }}
                        />
                        Morocco
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/ae">
                        <img
                          src={flag1}
                          alt="ae"
                          style={{ width: "30px", marginRight: "10px" }}
                        />
                        United Arab Emirates
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/us">
                        <img
                          src={us}
                          alt="us"
                          style={{ width: "30px", marginRight: "10px" }}
                        />
                        United States
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categories
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`${this.props.country}/business`}
                      >
                        Business
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`${this.props.country}/entertainment`}
                      >
                        Entertainment
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`${this.props.country}/general`}
                      >
                        General
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`${this.props.country}/health`}
                      >
                        Health
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item"
                        to={`${this.props.country}/science`}
                      >
                        Science
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`${this.props.country}/sports`}
                      >
                        Sports
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item"
                        to={`${this.props.country}/technology`}
                      >
                        Technology
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
