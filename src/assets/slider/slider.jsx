import React from "react";
import "./slider.css";
import Marquee from "react-fast-marquee";
export default function Slider() {
  return (
    <div>
      <div className="title">
        <h1>Airlines</h1>
        <div className="line1 "></div>
      </div>
      <Marquee
        style={{ marginTop: "80px" }}
        direction="left"
        pauseOnClick="false"
        speed={40}
        delay={0}
        gradientWidth="10"
      >
        <div className="image_wrapper">
          <img
            style={{ width: "200px" }}
            src="/images/air sialpng.png"
            alt=""
          />
        </div>
        <div className="image_wrapper">
          <img style={{ width: "200px" }} src="/images/airblue.png" alt="" />
        </div>
        <div className="image_wrapper">
          <img style={{ width: "200px" }} src="/images/pakistan.png" alt="" />
        </div>
        <div className="image_wrapper">
          <img
            style={{ width: "200px" }}
            src="/images/air-indus-logo.png"
            alt=""
          />
        </div>
        <div>
          <img style={{ width: "200px" }} src="/images/flyjinnah.jpg" alt="" />
        </div>
        <div className="image_wrapper">
          <img style={{ width: "200px" }} src="/images/serene.png" alt="" />
        </div>
      </Marquee>
    </div>
  );
}
