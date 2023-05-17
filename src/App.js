import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Layout } from "./components/layout/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import ContactUs from "../src/pages/contactus/contactus"
import DestinationCards from "./pages/destination/destination";
import Destinations from "./pages/destination/destination";
import Airlines from "./pages/airlines/airlines";
import Fares from "./pages/fares/fares";
import Beatmyquote from "./pages/contactus/contactus";
import Sendinquiry from "./pages/sendinquiry/sendinquiry";
import SearchResults from "./pages/searchResults";

import SingleDestinationFares from "./pages/singledestinationfares/singledestinationfares";
import SingleAirlinePage from "./pages/singleairlinepage/singleairlinepage";

import BookNow from "./pages/book/";

// import Modal from "./assets/modal.jsx/modal";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route
              path="/destinations/:name"
              element={<SingleDestinationFares />}
            />
            <Route path="/airlines" element={<Airlines />} />
            <Route path="/airlines/:name" element={<SingleAirlinePage />} />
            <Route path="/fares" element={<Fares />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/sendinquiry" element={<Sendinquiry />} />
            <Route path="/search-results" element={<SearchResults />} />
            <Route path="/book/:id" element={<BookNow />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
