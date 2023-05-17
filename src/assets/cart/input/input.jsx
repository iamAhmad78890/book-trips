import React, { useState } from "react";
import "./input.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Autocomplete } from "@mui/material";
import { MenuItem } from "@mui/material";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { data } from "../../utils/searchJson";

const Input = () => {
  const [show, setShow] = useState(true);
  const [type, setType] = useState();
  const [selectedDept, setSelectedDept] = useState(" ");
  const [selectedDest, setSelectedDest] = useState(" ");
  const handleChange = (type, value) => {
    if (type == "dep") {
      setSelectedDept(value);
    } else if (type == "dest") {
      setSelectedDest(value);
    }
  };
  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const SubmitHandling = () => {
    // console.log(selectedDept, selectedDest);
  };

  return (
    <div
      fullWidth
      sx={{ width: "280px" }}
      size="small"
      id="free-solo-2-demo"
      disableClearable
      autoHighlight
      options={
        data
          ? data.map(
              (deptt, i) =>
                ` ${deptt.city} - (${deptt.airportCode}) - ${deptt.airport} -
                    ${deptt.country}`
            )
          : [""]
      }
      onChange={(event, value) => {
        setSelectedDept(value);
      }}
    >
      <div id="booking" className="section">
        <div className="section-center">
          <div className="row">
            <div className="booking-form">
              <form>
                <div className="form-group">
                  <div className="form-checkbox">
                    <label for="roundtrip">
                      <input
                        onClick={() => setShow(true)}
                        type="radio"
                        id="roundtrip"
                        name="flight-type"
                      />
                      <span></span>Roundtrip
                    </label>
                    <label for="one-way">
                      <input
                        onClick={() => setShow(false)}
                        type="radio"
                        id="one-way"
                        name="flight-type"
                      />
                      <span></span> <span>One Way</span>
                    </label>
                    <label for="multi-city">
                      <input
                        onClick={() => setShow(true)}
                        type="radio"
                        id="multi-city"
                        name="flight-type"
                      />
                      <span></span>Multi-City
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <span className="form-label">Flying from</span>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="City or airport"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <span className="form-label">Flyning to</span>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="City or airport"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group">
                      <span className="form-label">Departing</span>
                      <input className="form-control" type="date" required />
                    </div>
                  </div>
                  {show ? (
                    <div className="col-md-3">
                      <div className="form-group">
                        <span className="form-label">Returning</span>
                        <input className="form-control" type="date" required />
                      </div>
                    </div>
                  ) : null}
                  <div className="col-md-2">
                    <div className="form-group">
                      <span className="form-label">Adults (18+)</span>
                      <select className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                      <span className="select-arrow"></span>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group">
                      <span className="form-label">Children (0-17)</span>
                      <select className="form-control">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                      </select>
                      <span className="select-arrow"></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group">
                      <span className="form-label">Travel class</span>
                      <select className="form-control">
                        <option>Economy class</option>
                        <option>Business class</option>
                        <option>First class</option>
                      </select>
                      <span className="select-arrow"></span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-btn">
                      <button className="submit-btn">Show flights</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
