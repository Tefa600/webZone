import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "../../images/SpaceZone.svg";

export default function Navbar() {
  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top navbar-light ${styles.navBg}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/Home">
          Home
        </a>
        <div className="logoPic">
          <div className="logoHome">
            <img src={Logo} alt="Space Logo" />
          </div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportContent"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`collapse navbar-collapse ${styles.items}`}
          id="navbarSupportContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="Home">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="UserProfile">
                User Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="OwnerProfile">
                Owner Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Recommendation">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="list-unstyled d-flex mb-lg-0">
            <div className="social-Links d-flex align-items-center">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram mx-3"></i>
              <i className="fab fa-twitter"></i>
            </div>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="Login">
                Login
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="Register">
                Register
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="Login">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
