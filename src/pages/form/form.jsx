import React, { useState, useEffect, useRef } from "react";
// import styles from "@/styles/components/common/inquiryForm.module.css";
import MuiPhoneNumber from "material-ui-phone-number";
import emailjs from "@emailjs/browser";
import {
  TextField,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  FormControl,
  ThemeProvider,
  Button,
  Slide,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";
// import { theme } from "@/styles/theme";
// import Layout from "@/components/layout";
import "./form.css";
const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rz6kbvl",
        "template_pyfmbr4",
        form.current,
        "UXDUb8jCpa3u0hdMB"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("mess sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // console.log(form);
  return (
    <div className="container" style={{ width: "100%" }}>
      <div className="row input-container">
        <form ref={form} onSubmit={sendEmail}>
          <div className="col-md-6">
            <div className="styled-input wide">
              <input type="text" name="user_name" required />
              <label> Name</label>
            </div>
          </div>{" "}
          <div className="col-md-6 col-sm-12">
            <div className="styled-input">
              <input type="text" required name="user_email" />
              <label>Email</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="styled-input wide">
              <input type="text" required name="your_budget" />
              <label>Your Budget</label>
            </div>
          </div>{" "}
          <div className="col-md-6">
            <div className="styled-input wide">
              <input type="text" required name="departure" />
              <label>Departure</label>
            </div>
          </div>{" "}
          <div className="col-md-6">
            <div className="styled-input wide">
              <input type="text" required name="returning" />
              <label>Returning</label>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input">
              <input type="number" required name="phone_number" />
              <label>Phone Number</label>
            </div>
          </div>{" "}
          <div className="col-md-6 col-sm-12">
            <div className="styled-input">
              <input
                type="text"
                placeholder="departure date"
                name="departure_date"
              />
              <label>Departure Date</label>
            </div>
          </div>{" "}
          <div className="col-md-6 col-sm-12">
            <div className="styled-input">
              <input
                type="text"
                placeholder="departure date"
                name="returning_date"
              />
              <label>Return Date</label>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="styled-input wide">
              <textarea required name="message"></textarea>
              <label name="message">Message</label>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="submit-btn">
              <button>Send </button>
            </div>
            {/* <div className=" submit-btn">Send Message</div> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
