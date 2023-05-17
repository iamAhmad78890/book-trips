import React, { useState, useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import MuiPhoneNumber from "material-ui-phone-number";
import emailjs from "@emailjs/browser";
import { useParams } from "react-router-dom";

import {
  TextField,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  FormControl,
  ThemeProvider,
  Button,
  Typography,
  Divider,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Skeleton,
} from "@mui/material";
import { Layout } from "../../components/layout/layout";
import { theme } from "../../theme";
// import { decrypt } from "utils/helpers";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { convertString } from "../../utils/helpers";
import Form from "../form/form";

export default function BookNow() {
  const params = useParams();
  const { id } = params;
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    returnDate: "",
    deptDate: "",
    budget: "",
  });
  const [sending, setSending] = useState();
  const [showDialog, setShowDialog] = useState(false);
  const [data, setData] = useState();
  const [selectedFare, setSelectedFare] = useState();

  const getData = async (id) => {
    const docRef = doc(db, "fares", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setData(docSnap.data());
    } else {
      return;
    }
  };

  const handleSubmit = () => {
    if (
      form.name ||
      form.email ||
      form.phone ||
      form.returnDate ||
      form.deptDate ||
      form.budget
    ) {
      setSending(true);
      emailjs
        .send(
          "service_rz6kbvl",
          "template_pyfmbr4",
          { ...form, ...selectedFare },
          "UXDUb8jCpa3u0hdMB"
        )
        .then((res) => {
          console.log(res);
          setShowDialog({
            title: "Successfull",
            msg: "Inquiry sent successfully, We will call you for further processing.",
          });
          setSending(false);
        })
        .catch((err) => {
          console.log(err);
          setShowDialog({
            title: "Something went wrong",
            msg: "Inquiry not sent.",
          });
          setSending(false);
        });
    } else {
      setShowDialog({
        title: "Error",
        msg: "Kindly fill the Form.",
      });
    }
  };

  const handleChange = (e, fieldName) => {
    if (fieldName == "phone") {
      setForm({ ...form, phone: e });
    } else {
      setForm({ ...form, [fieldName]: e.target.value });
    }
  };

  useEffect(() => {
    if (data) {
      setSelectedFare({
        dept: `${convertString(data.deptAirport.airport)} - ${
          data.deptAirport.airportCode
        } - ${convertString(data.deptAirport.city)}`,
        dest: `${convertString(data.destAirport.airport)} - ${
          data.destAirport.airportCode
        } - ${convertString(data.destAirport.city)}`,
        price: data.price,
        airline: convertString(data.airline.name),
      });
    }
  }, [data]);

  useEffect(() => {
    if (id) {
      // const id = decrypt(id);
      getData(id);
    }
  }, [id]);

  // console.log(form);
  // console.log(data);
  // console.log({ ...form, ...selectedFare });

  return (
    <div>
      {/* {data ? ( */}
      <ThemeProvider theme={theme}>
        <div className="bookPage">
          <div className="gridSectionOne">
            <div className="selectedFare">
              <div className="selectedFare__header">
                <Typography variant="h5" sx={{ color: "white" }}>
                  Selected Fare
                </Typography>
              </div>
              <div className="selectedFare__body">
                <div className="selectedFare__grid">
                  <Typography sx={{ fontWeight: "bolder" }}>
                    Departure Airport:{" "}
                  </Typography>
                  {data ? (
                    <Typography>
                      {` ${convertString(data.deptAirport.city)}`}
                    </Typography>
                  ) : (
                    <Skeleton variant="text" />
                  )}
                </div>
                <Divider />
                <div className="selectedFare__grid">
                  <Typography sx={{ fontWeight: "bolder" }}>
                    Destination Airport:
                  </Typography>
                  {data ? (
                    <Typography>
                      {` ${convertString(data.destAirport.city)}`}
                    </Typography>
                  ) : (
                    <Skeleton variant="text" />
                  )}
                </div>
                <Divider />
                <div className="selectedFare__grid">
                  <Typography sx={{ fontWeight: "bolder" }}>
                    Selected Airline:{" "}
                  </Typography>
                  {data ? (
                    // <Typography>{convertString(data.airline.name)}</Typography>
                    <img
                      style={{ width: "120px" }}
                      src={data.airline.img}
                      alt="airline logo"
                    />
                  ) : (
                    <Skeleton variant="text" />
                  )}
                </div>
                <Divider />
                <div className="selectedFare__grid">
                  <Typography sx={{ fontWeight: "bolder" }}>
                    Total Fare
                  </Typography>
                  {data ? (
                    <Typography variant="h6" sx={{ color: "red" }}>
                      from Rs{data.price} incl. Tax
                    </Typography>
                  ) : (
                    <Skeleton variant="text" />
                  )}
                </div>
                <Typography variant="caption" sx={{ opacity: "0.8" }}>
                  Please Note: If the requested fare will not be available then
                  we will offer you the best alternate fare.
                </Typography>
                <div>
                <Link to={`/contactus`}>
                <button  style={{padding:"10px 30px", marginTop:"20px"}}>Contact Us </button>
                </Link>
               
                </div>
              </div>
            </div>
            <div className="book__img">
              <img src="/images/Jinnah_Mausoleum.jpg" alt="book__image" style={{width:"400px",marginTop:"50px"}} />
            </div>
            
          </div>
          {/* <div>
          <h1
          style={{
            textAlign: "center",
          
          }}
        >
          SEND US INQUIRY
        </h1>
       
            <Form/>
         
          
          </div> */}
        </div>
        <Dialog open={showDialog} keepMounted onClose={() => showDialog(false)}>
          <DialogTitle>{showDialog.title}</DialogTitle>
          <DialogContent>
            <DialogContentText>{showDialog.msg}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setShowDialog(false)}>OK</Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
      {/* ) : (
        <div className={styles.loaderContainer}>
          <div className={styles.loader}></div>
        </div>
      )} */}
    </div>
  );
}
