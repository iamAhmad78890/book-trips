import React from "react";
import { useNavigate } from "react-router-dom";
import "./staticfarescard.css";
import { Link } from "react-router-dom";
import twowayplane from "../../images/twowayplane.png";
const FareCard = ({ fare }) => {
  const navigate = useNavigate();
  // console.log(fare);

  const {
    airline,
    deptAirport,
    deptCountry,
    destCountry,
    destAirport,
    price,
    _id,
  } = fare;

  return (
    <div>
      <div className="fares__page">
        <div className="plane__setting">
          <img alt="s" src={twowayplane} />
        </div>
        <div className="fares__card__page">
          {/* <div className="two__way__plane">
            <img
              src="./images/twowayplane.png"
              style={{ width: "40px" }}
              alt=""
              className="plane__two__way__img"
            />
          </div> */}

          <div className="fares__card">
            <div>
              <img
                alt=""
                className="airline__img"
                style={{ width: "0px" }}
                src={airline.img}
              />
            </div>
            <div className="fares__travel">
              <div className="child1">
                <div className="fares__deptAirport">
                  <h6>
                    {deptAirport.city}
                    <div> </div>{" "}
                  </h6>
                  <span>
                    {" "}
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </span>{" "}
                </div>
              </div>
              <div className="child2  ">
                <div className="fares__destAirport">
                  <h6>{destAirport.city}</h6>{" "}
                  <span>
                    {" "}
                    <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                  </span>{" "}
                </div>
              </div>
            </div>
            <div>
              <div>
                <p>
                  <br />
                  <span className="price__fare"> Rs {price}</span>{" "}
                  <b>Per Person</b>
                  <br />
                  <span className="subject__availability">
                    Subject to Availability
                  </span>
                  <br />
                </p>
                <span>
                  <br />
                </span>
                <br />
              </div>
            </div>
          </div>
          <div className=" columns price__Section">
            <div className="column  non-mob">
              <span className="icon__styled">
                <i className="fa fa-phone" style={{ fontSize: "20px" }}></i>
                <a className="phone__styled" href=" #">
                  0322000000
                </a>
              </span>
            </div>{" "}
            <div className="column ">
              <span className="icon__styled-whatsapp">
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
                <a className="phone__styled" href=" #">
                  0312345677
                </a>
              </span>
            </div>{" "}
            <div className="column space__column  ">
              <div className="button-fares">
                <Link to={`/book/${_id}`}>
                  <button onClick={() => navigate}>Send Inquiry</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* {modalOpen && <Modal setOpenModal={setModalOpen} />} */}
      </div>
    </div>
  );
};

export default FareCard;
