import React from "react";
import "./tour.css";
const Tour = () => {
  return (
    <div>
      <section className=" container tours">
        <div className="row1">
          <div className="col content-col">
            <h1>UPCOMING TOURS & DESTINATION</h1>
            <div className="line"></div>
            <p>
              People that travel for adventure, employment, family, and a
              variety of other reasons utilise BookTrips. Because of this, we
              put out great effort to make the process of arranging and
              purchasing your flights and travel arrangements as simple as we
              can.
            </p>
            {/* <button className="ctn-button">Learn More</button> */}
          </div>
          <div className="col image-col">
            <div className="image-gallery">
              <img src="./images/img3.png" alt="" />
              <img src="./images/img4.png" alt="" />
              <img src="./images/img5.png" alt="" />
              <img src="./images/img6.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tour;
