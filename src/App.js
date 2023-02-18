import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ReadData from "./pages/ReadData";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/readdata"} element={<ReadData />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;
