import React, { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { convertString } from "../../utils/helpers";
import { collection, getDocs } from "firebase/firestore";
import { query, limit, orderBy } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { startAfter } from "firebase/firestore";
import "./fares.css";
import { Link } from "react-router-dom";
import Modal from "../../assets/modal/modal";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Audio } from "react-loader-spinner";
import Loader from "../../assets/loader/loader";
import LoadingButton from "@mui/lab/LoadingButton";
import FareCard from "./staticfarescard";
const FaresPage = () => {
  const navigate = useNavigate();
  const [fares, setFares] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [skip, setSkip] = useState(0);
  let [lastDocu, setLastDocu] = useState();
  const [fetching, setFetching] = useState();
  const [blockApi, setBlockApi] = useState(false);

  const getData = async () => {
    if (!blockApi) {
      setFetching(true);
      if (fares.length == 0) {
        const arrOfData = [];
        const q = query(
          collection(db, "fares"),

          limit(10)
        );
        const querySnapshot = await getDocs(q);
        setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
        querySnapshot.forEach((doc) => {
          arrOfData.push({ ...doc.data(), _id: doc.id });
        });
        setFares(arrOfData);
        // console.log(arrOfData);
        if (arrOfData.length === 0) {
          setIsEmpty(true);
        }
        if (arrOfData.length < 10) {
          setBlockApi(true);
        }
      } else if (fares.length > 0) {
        const arrOfData = [];
        const q = query(
          collection(db, "fares"),

          startAfter(lastDocu),
          limit(10)
        );
        const querySnapshot = await getDocs(q);
        setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
        querySnapshot.forEach((doc) => {
          arrOfData.push({ ...doc.data(), _id: doc.id });
        });
        setFares([...fares, ...arrOfData]);
        if (arrOfData.length < 10) {
          setBlockApi(true);
        }
      }
      setFetching(false);
    }
  };

  async function getfares() {
    const arrOfData = [];
    const q = query(collection(db, "fares"), limit(6));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      arrOfData.push({
        ...doc.data(),
        _id: doc.id,
      });
    });
    setFares(arrOfData);
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  setTimeout(() => {
    setModalOpen(true);
  }, 10000);

  useEffect(() => {
    getfares();
  }, []);

  useEffect(() => {
    getData();
  }, [skip]);

  // console.log(fares);

  return (
    <div>
      {!fares.length > 0 ? (
        <Loader />
      ) : (
        <div className="fares__page">
          <div>
            <h1 style={{ textAlign: "center" }}>Fares</h1>
            <div className="line"></div>
          </div>

          {fares.map((fare) => (
            <FareCard fare={fare} />
          ))}
          {/* {modalOpen && <Modal setOpenModal={setModalOpen} />} */}
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
        </div>
      )}
    </div>
  );
};
export default FaresPage;
