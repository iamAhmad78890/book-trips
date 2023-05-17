import React from "react";
import "./loader.css";
const Loader = () => {
  return (
    <div style={{ height: "700px", marginTop: "400px" }}>
      <div className="col-12 text-center">
        <div className="loader1">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
