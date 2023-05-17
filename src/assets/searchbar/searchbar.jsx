import React, { useState, useEffect } from "react";
import "./searchbar.css";
import { convertString } from "../../utils/helpers";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Autocomplete } from "@mui/material";

import { data } from "../utils/searchJson";
import { margin } from "@mui/system";

export default function Searchbar() {
  const [selectedDept, setSelectedDept] = useState("");
  const [selectedDest, setSelectedDest] = useState("");
  const [type, setType] = useState();
  const [show, setShow] = useState(true);
  const [route, setRoute] = useState();

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

  function generateLink(dept, dest) {
    let deptCode = "";
    let destCode = "";
    if (dept.length > 3 && dest.length > 3) {
      const _dept = dept.split("-")[1].trim().split("");
      deptCode = [_dept[1], _dept[2], _dept[3]].join("");
      const _dest = dest.split("-")[1].trim().split("");
      destCode = [_dest[1], _dest[2], _dest[3]].join("");
      setRoute(`/search-results?dept=${deptCode}&dest=${destCode}`);
      return;
    } else if (dept.length > 3) {
      const _dept = dept.split("-")[1].trim().split("");
      deptCode = [_dept[1], _dept[2], _dept[3]].join("");
      setRoute(`/search-results?dept=${deptCode}&dest=all`);
    } else if (dest.length > 3) {
      const _dest = dest.split("-")[1].trim().split("");
      destCode = [_dest[1], _dest[2], _dest[3]].join("");
      setRoute(`/search-results?dept=all&dest=${destCode}`);
    }
    // console.log(deptCode);
    // console.log(destCode);
  }

  useEffect(() => {
    generateLink(selectedDept, selectedDest);
  }, [selectedDept, selectedDest]);

  // console.log(route);

  return (
    <div
      className="searchbar__css"
      style={{
        backgroundImage: `url("./images/Airline-Banner-New.jpg")`,
      }}
    >
      <div
        style={{
          marginTop: "-50px",
        }}
      >
        <div className="row">
          <div className="col-md-9">
            {" "}
            <div
            // style={{
            //   backgroundImage: `url("./images/Auckland.jpg")`,
            //   margin: "20px",
            // }}
            >
              <div id="booking">
                <div className="row">
                  <div className="booking-form">
                    <form>
                      <div className="form-group">
                        <div className="form-checkbox">
                          <label htmlFor="roundtrip">
                            <input
                              onClick={() => setShow(true)}
                              type="radio"
                              id="roundtrip"
                              name="flight-type"
                            />
                            <span></span>Round Trip
                          </label>
                          <label htmlFor="one-way">
                            <input
                              onClick={() => setShow(false)}
                              type="radio"
                              id="one-way"
                              name="flight-type"
                            />
                            <span></span> <span>One Way</span>
                          </label>
                          {/* <label for="multi-city">
                      <input
                        onClick={() => setShow(true)}
                        type="radio"
                        id="multi-city"
                        name="flight-type"
                      />
                      <span></span>Multi-City
                    </label> */}
                        </div>
                      </div>
                      <div className="">
                        <div className="dep-col-dest-col">
                          <div className="col-md-6">
                            <div className="form-group">
                              <span className="form-label">Departure</span>
                              <Autocomplete
                                size="big"
                                fullWidth
                                className="search-bar__width"
                                disableClearable
                                autoHighlight
                                options={
                                  data
                                    ? data.map(
                                        (deptt, i) =>
                                          ` ${convertString(
                                            deptt.city
                                          )} - (${convertString(
                                            deptt.airportCode
                                          )}) - ${convertString(
                                            deptt.airport
                                          )} -
                                ${convertString(deptt.country)}`
                                      )
                                    : [""]
                                }
                                onChange={(event, value) => {
                                  setSelectedDept(value);
                                }}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    sx={{
                                      "& fieldset": {
                                        border: "none",
                                      },
                                    }}
                                    style={{
                                      backgroundColor: "#fff",
                                      borderRadius: "10px",
                                    }}
                                    onChange={(event, value) => {
                                      handleChange("dept", value);
                                    }}
                                  />
                                )}
                              />
                            </div>
                          </div>
                          <div className=" col-md-6">
                            <div className="form-group aligning-arrival ">
                              <span className="form-label">Arrival</span>
                              <Autocomplete
                                fullWidth
                                className="search-bar__width"
                                size="big"
                                id="free-solo-2-demo"
                                disableClearable
                                autoHighlight
                                options={
                                  data
                                    ? data.map(
                                        (deptt, i) =>
                                          ` ${convertString(
                                            deptt.city
                                          )} - (${convertString(
                                            deptt.airportCode
                                          )}) - ${convertString(
                                            deptt.airport
                                          )} -
                            ${convertString(deptt.country)}`
                                      )
                                    : [""]
                                }
                                onChange={(event, value) => {
                                  setSelectedDest(value);
                                }}
                                renderInput={(params) => (
                                  <TextField
                                    sx={{
                                      "& fieldset": {
                                        border: "none",
                                        fontSize: "20px",
                                      },
                                      fontSize: "20px ",
                                    }}
                                    style={{
                                      backgroundColor: "#fff",
                                      borderRadius: "10px",
                                    }}
                                    onChange={(event, value) => {
                                      handleChange("dept", value);
                                    }}
                                    {...params}
                                  />
                                )}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="mob-dflex">
                          <div className="col-md-2 width_mob">
                            <div className="form-group">
                              <span className="form-label">Departing</span>
                              <input
                                className="form-control form__spacing"
                                type="date"
                                required
                              />
                            </div>
                          </div>
                          {show ? (
                            <div className="col-md-2 width_mob">
                              <div className="form-group">
                                <span className="form-label">Returning</span>
                                <input
                                  className="form-control"
                                  type="date"
                                  required
                                />
                              </div>
                            </div>
                          ) : null}
                        </div>
                        <div className="mob-dflex">
                          <div className="col-md-2 width_mob">
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
                          <div className="col-md-2   width_mob ">
                            <div className="form-group">
                              <span className="form-label">
                                Children (0-17)
                              </span>
                              <select className="form-control">
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                              </select>
                              <span className="select-arrow"></span>
                            </div>
                          </div>{" "}
                        </div>
                        <div className="col-md-2">
                          <div className="form-group">
                            <span className="form-label">Travel class</span>
                            <select className="form-control">
                              <option>Economy </option>
                              <option>Business </option>
                              <option>First </option>
                            </select>
                            <span className="select-arrow"></span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="col-md-12">
                          <div className="form-btn">
                            <Link to={route}>
                              <button
                                onClick={SubmitHandling}
                                className="submit-button"
                              >
                                Show Flights
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 plane__img">
            {/* <div className="planee ">
              <img src="./images/Plane-3.png" alt="" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
