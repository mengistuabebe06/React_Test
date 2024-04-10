import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ListFieldRandomPoints from "./components/RandomgraphComponets/ListFieldRandomPoints";
import ExcelRandomPointsList from "./components/RandomgraphComponets/ExcelRandomPointsList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListFieldRandomPoints />} />
        <Route
          path="/ExcelRandomPointsList"
          element={<ExcelRandomPointsList />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
