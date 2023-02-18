import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ReadData from "./pages/ReadData";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<ReadData />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;
