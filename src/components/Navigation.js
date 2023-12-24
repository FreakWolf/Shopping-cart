/* eslint-disable indent */
import React, { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navigation = () => {
  const navbar = useRef(null);

  const scrollHandler = () => {
    if (navbar.current && window.screen.width > 480) {
      if (window.pageYOffset >= 70) {
        navbar.current.classList.add("is-nav-scrolled");
      } else {
        navbar.current.classList.remove("is-nav-scrolled");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <nav className="navigation" ref={navbar}>
      <div className="logo">
        <Link to="/">
          <img alt="Logo" src={logo} />
        </Link>
      </div>
      <ul className="navigation-menu-main">
        <li>
          <NavLink activeClassName="navigation-menu-active" exact to="">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="navigation-menu-active" to="">
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="navigation-menu-active"
            to=""
          >
            Featured
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="navigation-menu-active"
            to=""
          >
            Recommended
          </NavLink>
        </li>
      </ul>
      <ul className="navigation-menu">
        <li className="navigation-menu-item"></li>
        <li className="navigation-menu-item"></li>
        <li className="navigation-action">
          <Link className="button button-small">Sign Up</Link>
          <Link className="button button-small button-muted margin-left-s">
            Sign In
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
