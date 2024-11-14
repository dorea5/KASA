import React from "react";
import Banner from "./Banner";
import Carts from "./Carts";
import Footer from "./Footer";
import "../styles/Cart.css";
import AboutPage from "./AboutPage";
import { Routes, Route } from "react-router-dom";

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

        <Route path="/AboutPage" element={<AboutPage />} />
      </Routes>
    </div>
  );
}
