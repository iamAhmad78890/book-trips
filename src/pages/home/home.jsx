import Input from "../../assets/cart/input/input";
import React, { useEffect, useState } from "react";
import Cart from "../../assets/cart/cart";
import Slider from "../../assets/slider/slider";
import Searchbar from "../../assets/searchbar/searchbar";
import Tour from "../../assets/tour/tour";
import Explore from "../../assets/explore/explore";
import FooterBanner from "../../components/footer-banner/footerbanner";
import DestinationCards from "../../assets/destinationcard/destinationcard";
import StaticdestinationCard from "../../assets/staticdestinationcard/staticdestinationcard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { query, limit, orderBy } from "firebase/firestore";
import "./home.css";
import Content from "../homepagecontent/content";
import { Skeleton } from "@mui/material";

const Home = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading2, setLoading2] = useState(false);

  async function getdestinations() {
    const arrOfData = [];
    const q = query(collection(db, "destinations"), limit(4));
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
  // console.log(destinations);
  return (
    <div>
      {/* <Democarousel /> */}
      <Searchbar />
      {/* <Cart /> */}
      <div className="spacing__card">
        <h1 style={{ textAlign: "center" }}>Destinations</h1>
        <div className="line"></div>
        {destinations.length > 0 ? (
          <div className="static__des__card">
            {destinations.map((item, i) => (
              <StaticdestinationCard destination={item} key={i} />
            ))}
          </div>
        ) : (
          <Skeleton variant="rectangular" width={300} height={300} />
        )}
      </div>
      <Explore />
      {/* <Searchengine /> */}
      {/* <Swiper /> */}
      <Tour />
      <Slider />
      <FooterBanner />/
      <Content />
    </div>
  );
};

export default Home;
