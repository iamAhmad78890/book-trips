import React from "react";
import "./explore.css";
export default function Explore() {
  return (
    <div>
      <section
        className="explore"
        style={{ backgroundImage: `url("./images/bg2.png")` }}
      >
        <div className="explore-content">
          <h3>EXPLORE THE WORLD</h3>
          <div className="line"></div>
          <p>
            BookTrips is used by travellers who go on vacation, business trips,
            family trips, and for a variety of other purposes. As a result, we
            make a lot of effort to make the process of arranging and We will
            make booking your flights and other travel arrangements as easy as
            we can.
          </p>
          {/* <button className="explore-btn">Learn more</button> */}
        </div>
      </section>
    </div>
  );
}
