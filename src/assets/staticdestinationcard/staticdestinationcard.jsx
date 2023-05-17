import React, { useState } from "react";
import "./staticdestinationcard.css";
import { Link } from "react-router-dom";
import { Skeleton } from "@mui/material";
const StaticdestinationCard = ({ destination }) => {
  // console.log(destination);
  const { img, name } = destination;
  return (
    <div className="container">
      <div className="">
        <div className=" ">
          <div className="des__img__card">
            <Link to={`/destinations/${name}`}>
              <div className="img-wrapper">
                <img src={img} alt="img" />

                <div>
                  <h3>{name}</h3>

                  {/* <div className=""></div>+ */}
                </div>
              </div>
            </Link>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default StaticdestinationCard;
