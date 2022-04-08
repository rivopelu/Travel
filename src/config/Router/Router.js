import React from "react";
import { Routes, Route } from "react-router-dom";
import { About, HomePage } from "../../pages";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default MainRouter;
