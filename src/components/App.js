import React from "react";
import Banner from "./Banner";
import Carts from "./Carts";
import Footer from "./Footer";
import "../styles/Cart.css";
import AboutPage from "./AboutPage";
import { Routes, Route } from "react-router-dom";
import Error404 from "./Error404";
import PageApartments from "./PageApartments";

export default function MyApp() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Carts />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<Error404 />} />
        <Route path="/apartment/:id" element={<PageApartments />} />
        <Route path="/AboutPage" element={<AboutPage />} />
      </Routes>
    </div>
  );
}
