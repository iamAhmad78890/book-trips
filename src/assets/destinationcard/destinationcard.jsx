import React, { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import "./destinationcard.css";
import { convertString } from "../../utils/helpers";
import { collection, getDocs } from "firebase/firestore";
import Loader from "../loader/loader";
import { Link } from "react-router-dom";
import { query, limit, orderBy } from "firebase/firestore";
import FooterBanner from "../../components/footer-banner/footerbanner";
// import { data } from "../../assets/utils/searchJson";

const DestinationCards = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading2, setLoading2] = useState(false);

  async function getdestinations() {
    const arrOfData = [];
    const q = query(collection(db, "destinations"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      arrOfData.push({
        ...doc.data(),
        _id: doc.id,
      });
    });
    setDestinations(arrOfData);
  }
  useEffect(() => {
    getdestinations();
  }, []);

  // useEffect(() => {
  //   setLoading2(true);
  //   setTimeout(() => {
  //     setLoading2(false);
  //   }, 4000);
  // }, []);

  // console.log(destinations);

  return (
    <div>
      {!destinations.length > 0 ? (
        <Loader />
      ) : (
        <div>
          <div className="banner__image">
            <img src="./images/Airline-Banner-New2.png" alt="" />
          </div>
          <div style={{ marginTop: "50px" }}>
            <div className="text-center " style={{ margin: "30px 0px " }}>
              <h1>Destinations</h1>
              <div className="line"></div>
            </div>

            <div className="container">
              <div className="image-area">
                <div className="align__destinations ">
                  {destinations.map((dest) => (
                    <Link to={`/destinations/${dest.name}`}>
                      <div key={dest.id}>
                        <div className="img-wrapper">
                          <img src={dest.img} alt="img" />

                          <div>
                            <h3> {convertString(dest.name)}</h3>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <FooterBanner />
    </div>
  );
};

export default DestinationCards;
