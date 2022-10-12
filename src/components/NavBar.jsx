import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      {/* <div> */}
      <div class="container-fluid">
        <h1 class="navbar-brand" style={{ fontSize: "2rem" }}>
          Stephan Manley
        </h1>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav  mb-lg-0">
            <li class="nav-item">
              <Link to="/" class="nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/portfolio" class="nav-link">
                Portfolio
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/hobbies" class="nav-link">
                Hobbies
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/lgbtqia" class="nav-link">
                LGBTQIA
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
