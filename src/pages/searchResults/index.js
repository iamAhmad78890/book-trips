import React, { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { convertString } from "../../utils/helpers";
import FareCard from "../fares/staticfarescard";

import {
  collection,
  query,
  where,
  getDocs,
  limit,
  startAfter,
} from "firebase/firestore";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./index.css";
import LoadingButton from "@mui/lab/LoadingButton";
import Sendquerry from "../sendinquiry/sendinquiry";
import Loader from "../../assets/loader/loader";
import FooterBanner from "../../components/footer-banner/footerbanner";

const Searchresults = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const dest = params.get("dest");
  const dept = params.get("dept");
  const [fares, setFares] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [skip, setSkip] = useState(0);
  let [lastDocu, setLastDocu] = useState();
  const [fetching, setFetching] = useState();
  const [blockApi, setBlockApi] = useState(false);

  const getData = async () => {
    if (!blockApi) {
      setFetching(true);
      if (fares.length == 0) {
        if (dest != "all" && dept != "all") {
          const arrOfData = [];
          const q = query(
            collection(db, "fares"),
            where("deptAirport.airportCode", "==", dept),
            where("destAirport.airportCode", "==", dest),
            limit(10)
          );
          const querySnapshot = await getDocs(q);
          setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            arrOfData.push({ ...doc.data(), _id: doc.id });
          });
          setFares(arrOfData);
          console.log("search by both");
          if (arrOfData.length === 0) {
            setIsEmpty(true);
          }
          if (arrOfData.length < 10) {
            setBlockApi(true);
          }
          setFetching(false);
          return;
        } else if (dept != "all") {
          const arrOfData = [];
          const q = query(
            collection(db, "fares"),
            where("deptAirport.airportCode", "==", dept),
            limit(10)
          );
          const querySnapshot = await getDocs(q);
          setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            arrOfData.push({ ...doc.data(), _id: doc.id });
          });
          setFares(arrOfData);
          console.log("search by dept");
          if (arrOfData.length === 0) {
            setIsEmpty(true);
          }
          if (arrOfData.length < 10) {
            setBlockApi(true);
          }
          setFetching(false);
          return;
        } else if (dest != "all") {
          const arrOfData = [];
          const q = query(
            collection(db, "fares"),
            where("destAirport.airportCode", "==", dest),
            limit(10)
          );
          const querySnapshot = await getDocs(q);
          setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            arrOfData.push({ ...doc.data(), _id: doc.id });
          });
          setFares(arrOfData);
          console.log("search by dest");
          if (arrOfData.length === 0) {
            setIsEmpty(true);
          }
          if (arrOfData.length < 10) {
            setBlockApi(true);
          }
          setFetching(false);
          return;
        }
      } else if (fares.length > 0) {
        if (dest != "all" && dept != "all") {
          const arrOfData = [];
          const q = query(
            collection(db, "fares"),
            where("deptAirport.airportCode", "==", dept),
            where("destAirport.airportCode", "==", dest),
            startAfter(lastDocu),
            limit(10)
          );
          const querySnapshot = await getDocs(q);
          setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            arrOfData.push({ ...doc.data(), _id: doc.id });
          });
          setFares([...fares, ...arrOfData]);
          console.log("search by both");
          if (arrOfData.length === 0) {
            setIsEmpty(true);
          }
          if (arrOfData.length < 10) {
            setBlockApi(true);
          }
          setFetching(false);
          return;
        } else if (dept != "all") {
          const arrOfData = [];
          const q = query(
            collection(db, "fares"),
            where("deptAirport.airportCode", "==", dept),
            startAfter(lastDocu),
            limit(10)
          );
          const querySnapshot = await getDocs(q);
          setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            arrOfData.push({ ...doc.data(), _id: doc.id });
          });
          setFares([...fares, ...arrOfData]);
          console.log("search by dept");
          if (arrOfData.length === 0) {
            setIsEmpty(true);
          }
          if (arrOfData.length < 10) {
            setBlockApi(true);
          }
          setFetching(false);
          return;
        } else if (dest != "all") {
          const arrOfData = [];
          const q = query(
            collection(db, "fares"),
            where("destAirport.airportCode", "==", dest),
            startAfter(lastDocu),
            limit(10)
          );
          const querySnapshot = await getDocs(q);
          setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
          querySnapshot.forEach((doc) => {
            arrOfData.push({ ...doc.data(), _id: doc.id });
          });
          setFares([...fares, ...arrOfData]);
          console.log("search by dest");
          if (arrOfData.length === 0) {
            setIsEmpty(true);
          }
          if (arrOfData.length < 10) {
            setBlockApi(true);
          }
          setFetching(false);
          return;
        }
      }
    }
  };

  useEffect(() => {
    if (dept && dest) {
      getData();
    }
  }, [dest, dept]);

  useEffect(() => {
    if (dept && dest) {
      getData();
    }
  }, [skip]);

  console.log(fares);

  return (
    <div>
      <div className="fares__page">
        {fares.map((fare) => (
       
          <FareCard fare={fare} />
        ))}
        {fares.length == 0 && !isEmpty && (
          <div>
            <Loader />
          </div>
        )}
        {fares.length > 0 && (
          <div style={{ textAlign: "center" }}>
            <LoadingButton
              sx={{ margin: "1rem", width: "10%", textAlign: "center" }}
              loading={fetching}
              disabled={blockApi}
              onClick={() => setSkip(skip + 1)}
              variant="contained"
            >
              {blockApi ? "No More" : "More"}
            </LoadingButton>
          </div>
        )}
        <>{isEmpty && <Sendquerry h1="Send Inquiry" />}</>
      </div>
      <FooterBanner />
    </div>
  );
};
export default Searchresults;
