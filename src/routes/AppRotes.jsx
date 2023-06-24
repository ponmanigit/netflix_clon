import { Routes, Route } from "react-router-dom";
import Home from "../netflixpages/Home";

import React from "react";
import Login from "../netflixpages/Login";
import Browser from "../netflixpages/Browser";
import Single from "../netflixpages/single";

const AppRotes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/browser" element={<Browser />} />
      <Route path="/browser/:id" element={<Single />} />
    </Routes>
  );
};
export default AppRotes;
