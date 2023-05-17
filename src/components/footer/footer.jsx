import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <img src="./assets/images/image.jpg" alt="" />
      <section className="footer">
        <div className="social">
          <a href=" # ">
            <i className="fab fa-facebook-square"></i>
          </a>

          <a href=" # ">
            <i className="fab fa-instagram-square"></i>
          </a>
          <a href=" #">
            <i className="fab fa-twitter-square"></i>
          </a>
        </div>
        <ul className="list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/destinations"> Destination</Link>
          </li>
          <li>
            <Link to="/airlines"> Airlines</Link>
          </li>
          <li>
            <Link to="/fares"> Fares</Link>
          </li>{" "}
          <li>
            <Link to="/contact"> Contact Us</Link>
          </li>
        </ul>
        <p className="copyright">Travelling Agent</p>
        <div className="line-1"></div>
      </section>
    </div>
  );
};

export default Footer;
