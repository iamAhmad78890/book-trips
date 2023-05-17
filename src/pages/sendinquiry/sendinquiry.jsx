import React from "react";
import Form from "../form/form";
import "./sendinquiry.css";
function Sendinquiry() {
  return (
    <div className="container">
      <div class="row ">
        <h1 style={{ textAlign: "center", marginTop: "100px" }}>
          Send us Inquiry
        </h1>
        <div className="line"></div>
      </div>
      <Form />
    </div>
  );
}
export default Sendinquiry;
