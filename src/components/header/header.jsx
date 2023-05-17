import { React, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./header.css";

function Header() {
  const handleClick = () => setClick(!click);
  const [click, setClick] = useState(false);
  const style = {
    padding: "18px",
    borderBottom: "3px solid pink",
  };
  const normal = {};
  return (
    // <div>
    //   <header className="header">
    //     {" "}
    //     <div className="header__logo">
    //       {" "}
    //       <Link to="/">
    //         {" "}
    //         <img src="./images/FlightCheapLogo.png" alt="" />{" "}
    //       </Link>{" "}
    //     </div>{" "}
    //     <div className="navigation ">
    //       {" "}
    //       <input type="checkbox" className="navigation__toggle" />
    //       <div className="hamburger"></div>{" "}
    //       <ul className="menu">
    //         <li>
    //           <Link to="/">Home</Link> <div className="line-2"></div>
    //         </li>{" "}
    //         <li>
    //           <NavLink
    //             to="/destinations"
    //             style={({ isActive }) => (isActive ? style : normal)}
    //           >
    //             {" "}
    //             Destinations
    //           </NavLink>{" "}
    //         </li>
    //         <li>
    //           <NavLink
    //             to="/airlines"
    //             style={({ isActive }) => (isActive ? style : normal)}
    //           >
    //             Airlines
    //           </NavLink>{" "}
    //         </li>
    //         <li>
    //           <NavLink
    //             to="/beatmyquote"
    //             style={({ isActive }) => (isActive ? style : normal)}
    //           >
    //             Beat My Quote
    //           </NavLink>{" "}
    //         </li>
    //         <li>
    //           <NavLink
    //             to="/fares"
    //             style={({ isActive }) => (isActive ? style : normal)}
    //           >
    //             Fares
    //           </NavLink>{" "}
    //         </li>
    //         <li>
    //           <NavLink
    //             to="/contact"
    //             style={({ isActive }) => (isActive ? style : normal)}
    //           >
    //             Contact Us
    //           </NavLink>{" "}
    //         </li>
    //       </ul>
    //     </div>
    //   </header>
    // </div>
    <nav className="navbar" style={{ marginBottom: "0px" }}>
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">
          <img
            src="./images/booktripslogo.jpeg"
            alt=""
            className="img__logo"
            style={{ height: "60px" }}
          />
        </NavLink>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink to="/" className="nav-links" onClick={handleClick}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/destinations"
              className="nav-links"
              onClick={handleClick}
            >
              Destinations
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/airlines" className="nav-links" onClick={handleClick}>
              Airlines
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/fares" className="nav-links" onClick={handleClick}>
              Fares
            </NavLink>
          </li>{" "}
          <li className="nav-item">
            <NavLink
              to="/contactus"
              className="nav-links"
              onClick={handleClick}
            >
              Contact us
            </NavLink>
          </li>
        </ul>

        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
}
export default Header;
