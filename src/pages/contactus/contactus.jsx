import React from "react";
import { Link } from "react-router-dom";
import Form from "../form/form";
import "./contactus.css";
function ContactUs() {
  return (
    <div
      style={{
        marginTop: "-20px",
      }}
    >
      <div>
        <h1
          style={{
            textAlign: "center",
            paddingTop: "50px",
          }}
        >
          Contact Us
        </h1>
        <div className="line"></div>
      </div>
      <Form />
    </div>
  );
}
export default ContactUs;
