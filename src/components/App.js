import React from "react";
import Banner from "./Banner";
import Carts from "./Carts";
import Footer from "./Footer";
import "../styles/Cart.css";
import AboutPage from "./AboutPage";
import { Routes, Route } from "react-router-dom";
import Error404 from "./Error404";

export default function MyApp() {
  return (
    <div>
      <Routes>
        <Route
          path="/App"
          element={
            <>
              <Banner />
              <Carts />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<Error404 />} />
        <Route path="/AboutPage" element={<AboutPage />} />
      </Routes>
    </div>
  );
}
