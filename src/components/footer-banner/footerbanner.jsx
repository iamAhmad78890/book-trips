import React, { useState, useEffect } from "react";
import "./footerbanner.css";
import {
  collection,
  query,
  where,
  getDocs,
  limit,
  startAfter,
} from "firebase/firestore";
import { db } from "../../lib/firebase";

const FooterBanner = () => {
  const [footerData, setFooterData] = useState(null);
  const [airline, setAirline] = useState(null);

  const getFooterData = async () => {
    const index = Math.floor(Math.random() * 13) + 1;
    // console.log(index);
    const arrOfData = [];
    if (index) {
      const q = query(
        collection(db, "airlinesFooters"),
        where("index", "==", index.toString())
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        arrOfData.push({ ...doc.data(), _id: doc.id });
      });
      setFooterData(arrOfData[0]);
      // console.log(arrOfData[0]);
    }
  };
  const getAirline = async () => {
    const index = Math.floor(Math.random() * 33) + 1;
    // console.log(index);
    const arrOfData = [];
    if (index) {
      const q = query(
        collection(db, "airlines"),
        where("index", "==", index.toString())
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        arrOfData.push({ ...doc.data(), _id: doc.id });
      });
      setAirline(arrOfData[0]);
      // console.log(arrOfData[0]);
    }
  };
  useEffect(() => {
    getFooterData();
    getAirline();
  }, []);
  // console.log(airline);
  // console.log(footerData);

  return (
    <div>
      {footerData && (
        <div className="container">
          <div className="footer__banner__heading">
            <h2>{footerData.mainTxt}</h2>
            <div className="line"></div>
          </div>
          <div className="footer-banner">
            {footerData.cards.map((item, i) => (
              <div key={i}>
                <div className="footer__large__img">
                  <img
                    src={item.img}
                    alt=""
                    className={i == 0 ? "first_card" : ""}
                  />
                  <div className="footer__large__img__content__mob">
                    <h2>{item.heading}</h2>
                    <p>{item.txt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {airline && (
        <div>
          <div className="footer__banner__image">
            <img src={airline.banner} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default FooterBanner;
