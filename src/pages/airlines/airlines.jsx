import React, { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import "./airlines.css";
import { convertString } from "../../utils/helpers";
import Loader from "../../assets/loader/loader";
import { Link } from "react-router-dom";
import { query, limit, orderBy } from "firebase/firestore";
import FooterBanner from "../../components/footer-banner/footerbanner";
const Airlines = () => {
  const [loading1, setLoading1] = useState(false);
  const [airlines, setAirlines] = useState([]);

  async function getairlines() {
    const arrOfData = [];
    const q = query(collection(db, "airlines"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      arrOfData.push({
        ...doc.data(),
        _id: doc.id,
      });
    });
    setAirlines(arrOfData);
  }
  console.log(airlines);
  useEffect(() => {
    setLoading1(true);
    setTimeout(() => {
      setLoading1(false);
    }, 2000);
  }, []);

  useEffect(() => {
    getairlines();
  }, []);

  // console.log(airlines);

  return (
    <div>
      {!airlines.length > 0 ? (
        <Loader />
      ) : (
        <div className="container" style={{ marginTop: "20px" }}>
          <div>
            <h1 style={{ textAlign: "center" }}>AirLines</h1>
            <div className="line"></div>
          </div>
          <div className="img__row" style={{ marginTop: "50px" }}>
            {airlines.map((air) => (
              <div key={air.id}>
                <div className="img__Sec">
                  <Link to={`/airlines/${air.name}`}>
                    <img className="" src={air.img} alt="img" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <FooterBanner />
    </div>
  );
};

export default Airlines;
